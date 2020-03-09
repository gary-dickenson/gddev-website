node {
    currentBuild.result = "SUCCESS"

    withEnv(["DEPLOYMENT_SERVER=pi@pi-4", "APP_NAME=gddev-website"]){
        try {
            deleteDir()
            stage("Checkout"){
                checkout scm
            }

            stage("Build"){
              if(env.BRANCH_NAME == "master"){
                sh "docker build -f Dockerfile.nginx -t $APP_NAME ."
                sh "docker tag $APP_NAME $APP_NAME:${currentBuild.number}"
                sh "docker build -f Dockerfile.nginx -t $APP_NAME:${currentBuild.number} --platform arm ."
              }
            }

            stage("Deploy"){
                sh "docker save -o /tmp/$APP_NAME-docker-image.tar $APP_NAME:${currentBuild.number}"
                sh "docker rmi -f \$(docker images -q $APP_NAME)"
                sh "rsync -avzhe ssh -v /tmp/$APP_NAME-docker-image.tar $DEPLOYMENT_SERVER:/tmp/"
                sh "rm /tmp/$APP_NAME-docker-image.tar"
                sh "ssh $DEPLOYMENT_SERVER \
                'docker stop $APP_NAME || true && \
                docker rm $APP_NAME || true && \
                docker rmi -f \$(docker images -q $APP_NAME) && \
                docker load -i /tmp/$APP_NAME-docker-image.tar && \
                rm /tmp/$APP_NAME-docker-image.tar && \
                docker run --name $APP_NAME -d -p 80:3000 $APP_NAME:${currentBuild.number}'"
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