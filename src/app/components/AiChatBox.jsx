import { BubbleChat } from 'flowise-embed-react'

const AiChatBox = () => {
  return (
    <BubbleChat
            chatflowid="a9f3d768-506a-428e-a9e9-92048c34f581"
            apiHost="http://212.38.94.209:8888"
            theme={{
                button: {
                    backgroundColor: "#000000",
                    right: 40,
                    bottom: 40,
                    size: 128, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Frespage_chatbot_bubbletalk_dribbble.gif?alt=media&token=00c973f1-89f2-491b-8dbb-dbb946dd1172",
                    autoWindowOpen: {
                        autoOpen: true, //parameter to control automatic window opening
                        openDelay: 2, // Optional parameter for delay time in seconds
                        autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                        },
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Chat with me 👋!',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Bot Assistant',
                    titleAvatarSrc: 'https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Fdrib_blink_bot.gif?alt=media&token=a1b4908d-e5b9-4cd2-b20c-34b1526c1203',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                    starterPromptFontSize: 15,
                    clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Fdrib_blink_bot.gif?alt=media&token=a1b4908d-e5b9-4cd2-b20c-34b1526c1203",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Hoang Nguyen',
                        companyLink: '',
                    }
                }
            }}
        />
  );
};

export default AiChatBox;