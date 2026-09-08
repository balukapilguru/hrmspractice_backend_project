pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hrmspractice_backend_project:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop hrmspractice_backend_project || true
                    docker rm hrmspractice_backend_project || true

                    docker stop hrmspractice_bakcend_project || true
                    docker rm hrmspractice_bakcend_project || true

                    docker run -d \
                        --name hrmspractice_backend_project \
                        -p 5000:5000 \
                        hrmspractice_backend_project:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
