node {
    currentBuild.result = "SUCCESS"

    withEnv(["DEPLOYMENT_SERVER=pi@pi-4", "APP_NAME=gddev-website"]){
        try {
            deleteDir()
            stage("Checkout"){
                checkout scm
            }

            stage("Environment") {
              sh "echo $APP_NAME"
              echo "Branch: ${env.BRANCH_NAME}"
            }

            stage("Build"){
              if(env.BRANCH_NAME == "master"){
                sh "docker build -t $APP_NAME ."
                sh "docker tag $APP_NAME $APP_NAME:${currentBuild.number}"
              }
            }

            stage("Deploy"){
                sh "docker save -o $APP_NAME-docker-image.tar gddev-website:${currentBuild.number}"
                sh "docker -H ssh://$DEPLOYMENT_SERVER rm -r /tmp/$APP_NAME-docker-image.tar"
                sh "docker rmi -f \$(docker images -q gddev-website)"
                sh "rsync -avzhe ssh -v $APP_NAME-docker-image.tar $DEPLOYMENT_SERVER:/tmp/"
                sh "rm /tmp/$APP_NAME-docker-image.tar"
                sh "docker -H ssh://$DEPLOYMENT_SERVER load -i /tmp/$APP_NAME-docker-image.tar"
                sh "docker -H ssh://$DEPLOYMENT_SERVER stop $APP_NAME"
                sh "docker -H ssh://$DEPLOYMENT_SERVER rm $APP_NAME"
                sh "docker -H ssh://$DEPLOYMENT_SERVER run -d -p 80:80 $APP_NAME"
            }
        } catch (err) {
            currentBuild.result = "FAILURE"

            //mail body: "project build error is here: ${env.BUILD_URL}" ,
            //from: "jenkins@gddevltd.co.uk",
            //subject: "$APP_NAME build failed",
            //to: "gary@gddevltd.co.uk"

            throw err
        }
    }
}