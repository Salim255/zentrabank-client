
pipeline {

    // ===========================================================
    // AGENT
    // ===========================================================
    // WHY:
    // "any" means Jenkins can run this pipeline on any available node.
    // Useful for VPS or single Jenkins instance setups.
    // ===========================================================
    agent any

    tools {
        nodejs "NODE20.19"
    }

    // ===========================================================
    // GLOBAL ENVIRONMENT VARIABLES
    // ===========================================================
    // WHY:
    // Centralized values used across all stages.
    // Makes pipeline easier to maintain and update.
    // ===========================================================
    environment {

        // Docker Hub repository name (your account/repo)
        DOCKER_IMAGE = "crawan/zentrabank-client"

        // Dynamic versioning using Jenkins build number
        // WHY:
        // - ensures every build is unique
        // - enables rollback to previous versions
        IMAGE_TAG = "${BUILD_NUMBER}"
    }


    // ===========================================================
    // PIPELINE STAGES
    // ===========================================================
    stages {


        // =======================================================
        // CHECKOUT SOURCE CODE
        // =======================================================
        stage('Checkout Code') {
            steps {
                // WHY:
                // Pull latest code from GitHub before building
                checkout scm
            }
        }

        // =======================================================
        // BUILD DOCKER IMAGE
        // =======================================================
        stage('Build Docker Image') {
            steps {

                // WHY:
                // Packages Angular dist into Nginx container
                sh """
                    docker build -t ${DOCKER_IMAGE}:${IMAGE_TAG} .
                    docker tag ${DOCKER_IMAGE}:${IMAGE_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }


        // =======================================================
        // 6) LOGIN TO DOCKER HUB
        // =======================================================
        stage('Login to Docker Hub') {
            steps {

                // WHY:
                // Needed before pushing images to registry
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


        // =======================================================
        // 7) PUSH IMAGE TO DOCKER HUB
        // =======================================================
        stage('Push Image') {
            steps {

                // WHY:
                // Makes image available for VPS deployment via docker-compose
                sh """
                    docker push ${DOCKER_IMAGE}:${IMAGE_TAG}
                    docker push ${DOCKER_IMAGE}:latest
                """
            }
        }

    }


    // ===========================================================
    // POST ACTIONS (ALWAYS RUN)
    // ===========================================================
    post {

        success {
            // Runs if pipeline succeeds
            echo 'Pipeline completed successfully 🚀'
        }

        failure {
            // Runs if pipeline fails
            echo 'Pipeline failed ❌'
        }

        always {
            // Always runs (cleanup, logs, etc.)
            echo 'Cleaning up...'
            sh "docker system prune -af || true" // 🔥 ADDED cleanup
        }
    }
}
