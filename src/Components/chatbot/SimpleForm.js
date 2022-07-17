import React from 'react';
import ChatBot from 'react-simple-chatbot';

// all available config props
const config ={
  width: "400px",
  height: "500px",
  headerTitle: "Game of Thrones Chatbot",
  floating: true,
};

const theme = {
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function SimpleForm() {
    return (<div>
      <ChatBot 
        steps={[
          {
            id: 'hello',
            message: 'Hello, I am a Game of Thrones chatbot',
            trigger: 'intro',
          },
          {
            id: 'intro',
            message: 'What is your name?',
            trigger: 'askName',
          },
          {
            id: 'askName',
            user: true,
            // end: true,
            trigger: 'answerName',
          },
          {
            id:'answerName', 
            message:'Hi {previousValue}, I am your Game of Thrones chatbot. Do you want to know about the Game of Thrones subscribe plans?',
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Please let me know your preferred plan', 
            trigger:'ask-plan',
          },
          {
            id:'ask-plan',
            options:[
            {value:'free', label:'Free', trigger:'free-response'},
            {value:'basic', label:'Basic', trigger:'basic-response'},
            {value:'standard', label:'Standard', trigger:'standard-response'},
            {value:'premium', label:'Premium', trigger:'premium-response'},
            ]
          },
          {
            id:'free-response',
            message:'You have selected free plan. You can customize one family for free. Thanks for using our service. Do you have any other questions?',
            trigger:'ask-service',
          },
          {
            id:'basic-response',
            message:'You have selected basic plan. You can customize one of your own family per month. Thanks for using our service. Do you have any other questions?',
            trigger:'ask-service',
          },
          {
            id:'standard-response',
            message:'You have selected standard plan. You can customize one of your own family per week. Thanks for using our service. Do you have any other questions?',
            trigger:'ask-service',
          },
          {
            id:'premium-response',
            message:'You have selected premium plan. You can customize one of your own family per day. Thanks for using our service. Do you have any other questions?',
            trigger:'ask-service',
          },
          {
            id:'no-response', 
            message:'Sorry to hear that.', 
            trigger:'ask-service',
          },
          {
            id:'ask-service',
            options:[
            {value:'y', label:'Yes', trigger:'ask-plan'},
            {value:'n', label:'No', trigger:'end'},
            ] 
          },
          {
            id:'end',
            message:'Thank you for using our service. Hope to see you again.',
            end:true,
          },
        ]}
        {...config}
      />
      </div>
        );
      }

export default SimpleForm;
