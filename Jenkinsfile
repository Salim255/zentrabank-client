
pipeline {

    ###############################################################
    # AGENT
    ###############################################################
    # WHY:
    # "any" means Jenkins can run this pipeline on any available node.
    # Useful for VPS or single Jenkins instance setups.
    ###############################################################
    agent any


    ###############################################################
    # GLOBAL ENVIRONMENT VARIABLES
    ###############################################################
    # WHY:
    # Centralized values used across all stages.
    # Makes pipeline easier to maintain and update.
    ###############################################################
    environment {

        # Docker Hub repository name (your account/repo)
        DOCKER_IMAGE = "crawan/zentrabank-client"  // Frontend image name

        # Dynamic versioning using Jenkins build number
        # WHY:
        # - ensures every build is unique
        # - enables rollback to previous versions
        IMAGE_TAG = "${BUILD_NUMBER}"
    }


    ###############################################################
    # PIPELINE STAGES
    ###############################################################
    stages {


        ###########################################################
        # 1 CHECKOUT SOURCE CODE
        ###########################################################
        stage('Checkout Code') {
            steps {

                # WHY:
                # Pull latest code from GitHub before building
                checkout scm
            }
        }


        ###########################################################
        # 2 INSTALL DEPENDENCIES
        ###########################################################
        stage('Install Dependencies') {
            steps {

                # WHY:
                # Ensures clean dependency installation
                # avoids CI/CD "works on my machine" issues
                sh 'npm ci'
            }
        }


        ###########################################################
        # 3 RUN TESTS (OPTIONAL BUT RECOMMENDED)
        ###########################################################
        stage('Run Tests') {
            steps {

                # WHY:
                # Prevent broken UI from being deployed
                sh 'npm test -- --watch=false --browsers=ChromeHeadless'
            }
        }


        ###########################################################
        # 4 BUILD ANGULAR APPLICATION
        ###########################################################
        stage('Build Angular App') {
            steps {

                # WHY:
                # Produces optimized static files (dist/)
                # ready for Nginx production server
                sh 'npm run build --configuration production'
            }
        }


        ###########################################################
        # 5 BUILD DOCKER IMAGE
        ###########################################################
        stage('Build Docker Image') {
            steps {

                # WHY:
                # Packages Angular dist into Nginx container
                sh """
                    docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} .
                    docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }


        ###########################################################
        # 6 LOGIN TO DOCKER HUB
        ###########################################################
        stage('Login to Docker Hub') {
            steps {

                # WHY:
                # Needed before pushing images to registry
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }


        ###########################################################
        # 7 PUSH IMAGE TO DOCKER HUB
        ###########################################################
        stage('Push Image') {
            steps {

                # WHY:
                # Makes image available for VPS deployment via docker-compose
                sh """
                    docker push ${DOCKER_IMAGE}:${IMAGE_TAG}
                    docker push ${DOCKER_IMAGE}:latest
                """
            }
        }


        ###########################################################
        # 8 CLEANUP WORKSPACE
        ###########################################################
        stage('Cleanup') {
            steps {

                # WHY:
                # Prevents disk space issues on Jenkins VPS
                cleanWs()
            }
        }
    }


    ###############################################################
    # POST ACTIONS (ALWAYS RUN)
    ###############################################################
    post {

        success {
            echo "✅ Zentrabank Client built and pushed successfully!"
        }

        failure {
            echo "❌ Build failed — check logs"
        }
    }
}
