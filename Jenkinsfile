pipeline{
    agent any

    stages {
        stage('Build'){
            steps {
                bat 'npm install -g npm'
            }
        }
        stage('Test'){
            steps {
                bat 'npm test --watchAll-false'
            }
        }
        stage('Deploy'){
            steps {
                bat 'npm start'
            }
        }
    }
}
