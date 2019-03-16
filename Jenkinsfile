def webacs = "https://github.com/asterics/WebACS.git"

pipeline {
    parameters {
        choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
        choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
        gitParameter(branchFilter: 'origin.*/(.*)', defaultValue: env.BRANCH_NAME, name: 'BRANCH', type: 'PT_BRANCH_TAG', useRepository: "${webacs}")
    }
    agent {
        docker {
            image params.image
            label params.agent
        }
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                    yarn install
                    yarn build
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    yarn test
                '''
            }
        }
    }
    post {
        always {
            cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
        }
    }
}