node {
    currentBuild.result = "SUCCESS"

    withEnv(["DEPLOYMENT_SERVER=pi@pi-2", "APP_NAME=gddev-website"]){
        try {
            stage("Checkout"){
                checkout scm
            }

            stage("Environment") {
              sh "echo $APP_NAME"
              //sh "git --version"
              echo "Branch: ${env.BRANCH_NAME}"
              //sh "docker -v"
              //sh "printenv"
            }

            stage("Build"){
              if(env.BRANCH_NAME == "master"){
                sh "docker build -t $APP_NAME --no-cache ."
                sh "docker tag $APP_NAME $APP_NAME:${currentBuild.number}"
                //sh "docker push ggddev-website"
                //sh "docker rmi -f gddev-website"
              }
            }

            stage("Deploy"){
                sh "docker save -o $APP_NAME-docker-image.tar gddev-website:latest"
                sh "rsync -avzhe ssh -v $APP_NAME-docker-image.tar $DEPLOYMENT_SERVER:/tmp/"
                sh "docker load -i $APP_NAME-docker-image.tar"
                sh "rm -r $APP_NAME-docker-image.tar"
                sh "docker stop $APP_NAME || true && docker rm $APP_NAME || true"
                sh "docker run $APP_NAME"
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