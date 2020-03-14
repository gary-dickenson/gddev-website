node {
    currentBuild.result = "SUCCESS"

    withEnv(["DEPLOYMENT_SERVER=gary@optiplex-ubuntu", "APP_NAME=gddev-website"]){
        try {
            deleteDir()
            stage("Checkout"){
                checkout scm
            }

            stage("Build"){
              if(env.BRANCH_NAME == "master"){
                sh "docker build -f Dockerfile.nginx -t $APP_NAME ."
                sh "docker tag $APP_NAME $APP_NAME:${currentBuild.number}"
              }
            }

            stage("Deploy"){
                sh "docker save -o /tmp/$APP_NAME-docker-image.tar $APP_NAME:${currentBuild.number}"
                sh "docker rmi -f \$(docker images -q $APP_NAME)"
                sh "rsync -avzhe ssh -v /tmp/$APP_NAME-docker-image.tar $DEPLOYMENT_SERVER:/tmp/"
                sh "docker -H ssh://$DEPLOYMENT_SERVER stop $APP_NAME || true"
                sh "docker -H ssh://$DEPLOYMENT_SERVER rm $APP_NAME || true"
                sh "docker -H ssh://$DEPLOYMENT_SERVER rmi -f \$(docker images -q $APP_NAME) | true"
                sh "docker -H ssh://$DEPLOYMENT_SERVER load -i /tmp/$APP_NAME-docker-image.tar"
                sh "ssh $DEPLOYMENT_SERVER rm /tmp/$APP_NAME-docker-image.tar"
                sh "docker -H ssh://$DEPLOYMENT_SERVER run --name $APP_NAME -d -p 80:3000 $APP_NAME:${currentBuild.number}"
                sh "ssh $DEPLOYMENT_SERVER nginx"
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