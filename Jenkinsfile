pipeline{
    agent any

    stages {
        stage('Build'){
            steps {
<<<<<<< HEAD
                bat 'npm install'
=======
                bat 'npm install -g npm'
>>>>>>> f62c15e09a964abb0b5f1ad0385b472eb8335c28
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
<<<<<<< HEAD
                echo 'deploying the application'
=======
>>>>>>> f62c15e09a964abb0b5f1ad0385b472eb8335c28
            }
        }
    }
}
