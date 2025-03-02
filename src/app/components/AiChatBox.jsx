import { BubbleChat } from 'flowise-embed-react'

const AiChatBox = () => {

const apiHost = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:8888';

  return (
    <BubbleChat
            chatflowid="ecc03006-8bf2-4fdd-b8fc-e2c42a9b1dfd"
            apiHost={apiHost}
            theme={{
                button: {
                    backgroundColor: "linear-gradient(135deg, #C083FA, #DB2979)",
                    right: 20,
                    bottom: 20,
                    size: 64, // small | medium | large | number
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
                    tooltipMessage: 'Hỏi tui nè 👋',
                    tooltipBackgroundColor: "linear-gradient(135deg, #C083FA, #DB2979)",
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Trợ lý của Hoàng',
                    titleAvatarSrc: 'https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Ffunny-cat.gif?alt=media&token=515cab8d-f506-44a4-afbe-ecc5c36b4b8c',
                    showAgentMessages: true,
                    welcomeMessage: 'Xin chào! Tôi là trợ lý của Hoàng, hãy hỏi tôi các thông tin bạn muốn biết về Hoàng nhé',
                    errorMessage: 'This is a custom error message',
                    loadingMessage: 'Đang suy nghĩ...',
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
                        avatarSrc: "https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Ffunny-cat.gif?alt=media&token=515cab8d-f506-44a4-afbe-ecc5c36b4b8c",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://firebasestorage.googleapis.com/v0/b/aichatbot001.appspot.com/o/avatars%2Fanymous-icon.svg?alt=media&token=bd82e06c-25b1-4636-8317-a2cdedb8d744",
                    },
                    textInput: {
                        placeholder: 'Hỏi gì tui đi bạn ơi!',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 200,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Được tạo bởi',
                        company: 'Hoang Nguyen',
                        companyLink: '',
                    }
                }
            }}
        />
  );
};

export default AiChatBox;