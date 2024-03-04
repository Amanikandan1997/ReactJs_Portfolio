import React from 'react'
import ChatBot from 'react-simple-chatbot';
import manicv from "./assests/assets/pdf/mani cv.pdf"
import { ThemeProvider } from 'styled-components';
import DP from "./assests/perfil.png"

function Chat() {

    const theme = {
        background: '#f5f8fb',
        botAvatar:"https://amanikandan1997.github.io/ReactJs_Portfolio/static/media/perfil.cf3c574335dd6f9dd291.png",
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
  return (
    <ThemeProvider theme={theme}>
      
    <ChatBot
    headerTitle="Manikandan Arunachalam"
      speechSynthesis={{ enable: true, lang: 'en' }}
      recognitionEnable={true}
    steps={[
        {
            id: '1',
            message: "Hi i'm Manikandan , What's your Name",
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi  {previousValue}  ! you are a Manager Or HR or Student or vistor If so click on the correct popup given below',
            trigger: 'job',
          },
          {
            id: 'job',
            options: [
              { value: 'Manager', label: 'Manager', trigger: '5' },
              { value: 'HR', label: 'HR', trigger: '5' },
              { value: 'Student', label: 'Student', trigger: '5' },
              { value: 'Visitor', label: 'Visitor', trigger: '5' },
            ],
          },
          {
            id: '5',
            component: (
              <div> <a download href={manicv} className="button">
              Download CV  </a> &nbsp;  &nbsp;  &nbsp;<br/><br/>
              <a  className="button" href="mailto:manikandanarunachalam913@gmail.com">Send Mail</a><br/><br/>
              
             
              © <a href="https://github.com/Amanikandan1997">Manikandan Arunachalam @ 2022 - {new Date().getFullYear()} </a>
              </div>
              
            ),
           
            trigger: 'end',
          },
          {
            id: 'end',
            message: 'Download cv Give to know job and profile  or  Email for information on freelance work                 Thank you for visiting my portfolio website',
            end:true,
          },
          
         
        ]}
        
       
        floating={true}
  />
  </ThemeProvider>
  )
}

export default Chat