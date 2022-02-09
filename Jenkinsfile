pipeline{
    agent any

    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test --watchAll-false'
            }
        }
        stage('Deploy'){
            steps {
                sh 'npm start'
            }
        }
    }
}
