import React from 'react';
import './Chat.css';

const chats = [
    {
        name: "NeoMessanger Bot",
        time: "19:32",
        lastmsg: "Bot has been upgraded!",
        countOfmsg: 1,
        profileUrl: null
    },
    {
        name: "Alice",
        time: "20:15",
        lastmsg: "Hey, how's it going?",
        countOfmsg: 3,
        profileUrl: "profile1.jpeg"
    },
    {
        name: "Bob",
        time: "21:45",
        lastmsg: "Can't wait for the weekend!",
        countOfmsg: 2,
        profileUrl: "Avatar.png"
    },
    {
        name: "Charlie",
        time: "22:30",
        lastmsg: "I'm working on a new project.",
        countOfmsg: 1,
        profileUrl: "Avatar1.png"
    },
    {
        name: "David",
        time: "23:10",
        lastmsg: "Let's catch up soon!",
        countOfmsg: 4,
        profileUrl: "Avatar2.png"
    },
    {
        name: "Eva",
        time: "08:20",
        lastmsg: "Good morning!",
        countOfmsg: 2,
        profileUrl: "Avatar3.png"
    },
    {
        name: "Frank",
        time: "09:45",
        lastmsg: "Have you seen the latest movie?",
        countOfmsg: 1,
        profileUrl: "Avatar4.png"
    },
    {
        name: "Grace",
        time: "10:30",
        lastmsg: "What's for lunch?",
        countOfmsg: 3,
        profileUrl: "Avatar5.png"
    },
    {
        name: "Harry",
        time: "11:20",
        lastmsg: "Just finished my workout!",
        countOfmsg: 1,
        profileUrl: "Avatar1.png"
    },
    {
        name: "Isabel",
        time: "12:05",
        lastmsg: "Excited for the upcoming event!",
        countOfmsg: 2,
        profileUrl: "Avatar4.png"
    },
    {
        name: "Jack",
        time: "13:40",
        lastmsg: "How's the weather there?",
        countOfmsg: 1,
        profileUrl: "Avatar3.png"
    },
    {
        name: "Kelly",
        time: "14:25",
        lastmsg: "Did you see my email?",
        countOfmsg: 5,
        profileUrl: "Avatar2.png"
    },
    {
        name: "Leo",
        time: "15:10",
        lastmsg: "Working on a new design.",
        countOfmsg: 1,
        profileUrl: "Avatar5.png"
    },
    {
        name: "Mia",
        time: "16:45",
        lastmsg: "I have exciting news to share!",
        countOfmsg: 3,
        profileUrl: "Avatar2.png"
    },
    {
        name: "Noah",
        time: "17:30",
        lastmsg: "Meeting went well.",
        countOfmsg: 2,
        profileUrl: "profile1.jpeg"
    },
    {
        name: "Olivia",
        time: "18:15",
        lastmsg: "How was your day?",
        countOfmsg: 4,
        profileUrl: "Search.svg"
    },
    {
        name: "Peter",
        time: "20:00",
        lastmsg: "Let's plan a trip!",
        countOfmsg: 1,
        profileUrl: "something.svg"
    },
    {
        name: "Quinn",
        time: "21:20",
        lastmsg: "I tried a new recipe today.",
        countOfmsg: 2,
        profileUrl: "Subtract.svg"
    },
    {
        name: "Ryan",
        time: "22:10",
        lastmsg: "Have you read any good books lately?",
        countOfmsg: 3,
        profileUrl: "NeoMessangerLogo.png"
    },
    {
        name: "Sara",
        time: "23:45",
        lastmsg: "Late-night thoughts...",
        countOfmsg: 1,
        profileUrl: "LogoMsg.png"
    }
];

function ChatComp(props) {
    return (
        <div className="ChatComponent">
            <div className="Avatar">{props.item.profileUrl && <img src={props.item.profileUrl} alt="profile" />}</div>
            <div className="MessagePreview">
                <div className="personNameAndTime">
                    <div className="pName">{props.item.name}</div>
                    <div className="Time">{props.item.time}</div>
                </div>
                <div className="MessageAndNoti">
                    <div className="MessageOne"><p>{props.item.lastmsg}</p></div>
                    <div className="CountOfMsg">{props.item.countOfmsg}</div>
                </div>
            </div>
        </div>
    );
}

function TopBar(props) {
    return (
        <div className="topBar">
            <div className="OtherUser">
                <div className="ImageCont"></div>
                <div className="TextHead">
                    <h4>Bob</h4>
                    <h5>last seen 5 min ago</h5>
                </div>
                <div className="searchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 2.5C11.398 2.49994 12.7681 2.89061 13.9559 3.62792C15.1436 4.36523 16.1016 5.41983 16.7218 6.6727C17.342 7.92558 17.5997 9.32686 17.4658 10.7184C17.3319 12.11 16.8117 13.4364 15.964 14.548L20.707 19.293C20.8864 19.473 20.9905 19.7144 20.9982 19.9684C21.006 20.2223 20.9168 20.4697 20.7488 20.6603C20.5807 20.8508 20.3464 20.9703 20.0935 20.9944C19.8406 21.0185 19.588 20.9454 19.387 20.79L19.293 20.707L14.548 15.964C13.601 16.6861 12.4957 17.1723 11.3234 17.3824C10.1512 17.5925 8.94583 17.5204 7.807 17.1721C6.66817 16.8238 5.62865 16.2094 4.77446 15.3795C3.92026 14.5497 3.27595 13.5285 2.89483 12.4002C2.51371 11.2719 2.40675 10.0691 2.5828 8.89131C2.75884 7.7135 3.21283 6.59454 3.9072 5.62703C4.60156 4.65951 5.51634 3.87126 6.57585 3.32749C7.63535 2.78372 8.80911 2.50006 10 2.5ZM10 4.5C8.54131 4.5 7.14236 5.07946 6.11091 6.11091C5.07946 7.14236 4.5 8.54131 4.5 10C4.5 11.4587 5.07946 12.8576 6.11091 13.8891C7.14236 14.9205 8.54131 15.5 10 15.5C11.4587 15.5 12.8576 14.9205 13.8891 13.8891C14.9205 12.8576 15.5 11.4587 15.5 10C15.5 8.54131 14.9205 7.14236 13.8891 6.11091C12.8576 5.07946 11.4587 4.5 10 4.5Z" fill="#707991" />
                    </svg>
                </div>
                <div className="callIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.77201 2.43899L8.84801 2.09499C9.85801 1.77299 10.935 2.29399 11.368 3.31199L12.227 5.33999C12.601 6.22299 12.394 7.26199 11.713 7.90799L9.81901 9.70599C9.93501 10.782 10.297 11.841 10.903 12.883C11.4788 13.8912 12.251 14.7736 13.174 15.478L15.449 14.718C16.312 14.431 17.251 14.762 17.779 15.539L19.012 17.349C19.627 18.253 19.517 19.499 18.754 20.265L17.936 21.086C17.122 21.903 15.959 22.2 14.884 21.864C12.345 21.072 10.011 18.721 7.88101 14.811C5.74801 10.895 4.99501 7.57099 5.62301 4.84299C5.88701 3.69499 6.70401 2.77999 7.77201 2.43899Z" fill="#707991" />
                    </svg>
                </div>
                <div className="MoreIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18Z" fill="#707991" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
function Messages(props) {
    return (
        <div className="MessageCont">
            <div className="DataSent">
                <div className="DateGroup">
                    <h1>Today</h1>
                    <div className="MsgOtherUser">
                        <div className="MsgComponent">
                            <p>OMG do you remember what you did last night
                                at the work night out?</p>
                            <div className="TimeOrIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_11_199)">
                                        <path d="M17.9425 5.9165C17.9425 3.1915 15.7335 0.982498 13.009 0.982498C11.355 0.982498 9.8955 1.799 9 3.047C8.1045 1.799 6.645 0.982498 4.9915 0.982498C2.2665 0.982498 0.0575027 3.191 0.0575027 5.9165C0.0575027 6.3025 0.106503 6.6765 0.190503 7.037C0.875503 11.2935 5.608 15.784 9 17.017C12.3915 15.784 17.1245 11.2935 17.8085 7.0375C17.8935 6.677 17.9425 6.303 17.9425 5.9165Z" fill="#F71735" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11_199">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>18:12</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="#011627" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>no haha</p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgOtherUser">
                        <div className="MsgComponent">
                            <p>OMG do you remember what you did last night
                                at the work night out?</p>
                            <div className="TimeOrIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_11_199)">
                                        <path d="M17.9425 5.9165C17.9425 3.1915 15.7335 0.982498 13.009 0.982498C11.355 0.982498 9.8955 1.799 9 3.047C8.1045 1.799 6.645 0.982498 4.9915 0.982498C2.2665 0.982498 0.0575027 3.191 0.0575027 5.9165C0.0575027 6.3025 0.106503 6.6765 0.190503 7.037C0.875503 11.2935 5.608 15.784 9 17.017C12.3915 15.784 17.1245 11.2935 17.8085 7.0375C17.8935 6.677 17.9425 6.303 17.9425 5.9165Z" fill="#F71735" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11_199">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>18:12</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="#011627" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgOtherUser">
                        <div className="MsgComponent">
                            <p>OMG do you remember what you did last night
                                at the work night out?</p>
                            <div className="TimeOrIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <g clip-path="url(#clip0_11_199)">
                                        <path d="M17.9425 5.9165C17.9425 3.1915 15.7335 0.982498 13.009 0.982498C11.355 0.982498 9.8955 1.799 9 3.047C8.1045 1.799 6.645 0.982498 4.9915 0.982498C2.2665 0.982498 0.0575027 3.191 0.0575027 5.9165C0.0575027 6.3025 0.106503 6.6765 0.190503 7.037C0.875503 11.2935 5.608 15.784 9 17.017C12.3915 15.784 17.1245 11.2935 17.8085 7.0375C17.8935 6.677 17.9425 6.303 17.9425 5.9165Z" fill="#F71735" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11_199">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>18:12</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="#011627" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="MsgYou">
                        <div className="MsgComponentYou">
                            <p>i don't remember anything </p>
                            <div className="TimeOrIconYou">
                                <p>18:16</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.95834 9.67517L2.74575 7.46258C2.63574 7.35632 2.48838 7.29753 2.33544 7.29886C2.18249 7.30019 2.03618 7.36153 1.92803 7.46969C1.81987 7.57784 1.75852 7.72415 1.75719 7.8771C1.75586 8.03005 1.81466 8.1774 1.92092 8.28742L4.54592 10.9124C4.65531 11.0218 4.80366 11.0832 4.95834 11.0832C5.11302 11.0832 5.26136 11.0218 5.37075 10.9124L11.7874 4.49575C11.8937 4.38573 11.9525 4.23838 11.9511 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95834 9.67517Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="InputBar">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1.99899C17.524 1.99899 22.002 6.47699 22.002 12.001C22.002 17.524 17.524 22.002 12 22.002C6.476 22.002 1.998 17.524 1.998 12.001C1.998 6.47699 6.476 1.99899 12 1.99899ZM12 3.49899C10.8758 3.4868 9.76036 3.69769 8.71822 4.11946C7.67608 4.54124 6.72793 5.16551 5.92866 5.95616C5.12939 6.74681 4.49487 7.68813 4.06182 8.72563C3.62877 9.76314 3.4058 10.8762 3.4058 12.0005C3.4058 13.1248 3.62877 14.2378 4.06182 15.2754C4.49487 16.3129 5.12939 17.2542 5.92866 18.0448C6.72793 18.8355 7.67608 19.4597 8.71822 19.8815C9.76036 20.3033 10.8758 20.5142 12 20.502C14.232 20.4678 16.361 19.5571 17.9274 17.9665C19.4937 16.376 20.3716 14.2333 20.3716 12.001C20.3716 9.76871 19.4937 7.62597 17.9274 6.03545C16.361 4.44493 14.232 3.53423 12 3.49999V3.49899ZM8.462 14.784C8.88275 15.32 9.41996 15.7532 10.0329 16.0509C10.6459 16.3485 11.3186 16.5028 12 16.502C12.6806 16.5028 13.3524 16.3489 13.9648 16.0519C14.5772 15.755 15.1141 15.3228 15.535 14.788C15.6583 14.6319 15.8386 14.5312 16.0362 14.5081C16.2337 14.4849 16.4324 14.5412 16.5885 14.6645C16.7446 14.7878 16.8453 14.9681 16.8684 15.1657C16.8916 15.3632 16.8353 15.5619 16.712 15.718C16.1507 16.4306 15.435 17.0064 14.6187 17.4021C13.8025 17.7977 12.9071 18.0028 12 18.002C11.0918 18.0027 10.1952 17.797 9.37821 17.4002C8.5612 17.0035 7.84508 16.4262 7.284 15.712C7.1662 15.5553 7.11439 15.3588 7.13968 15.1644C7.16497 14.9701 7.26533 14.7933 7.41929 14.6721C7.57326 14.5508 7.76858 14.4946 7.96346 14.5155C8.15834 14.5364 8.33729 14.6328 8.462 14.784ZM9 8.74999C9.16706 8.74527 9.33337 8.77409 9.4891 8.83476C9.64483 8.89542 9.78681 8.9867 9.90665 9.1032C10.0265 9.21969 10.1217 9.35904 10.1868 9.51298C10.2518 9.66693 10.2854 9.83237 10.2854 9.99949C10.2854 10.1666 10.2518 10.3321 10.1868 10.486C10.1217 10.64 10.0265 10.7793 9.90665 10.8958C9.78681 11.0123 9.64483 11.1036 9.4891 11.1642C9.33337 11.2249 9.16706 11.2537 9 11.249C8.67473 11.2398 8.36587 11.1041 8.13906 10.8708C7.91224 10.6375 7.78535 10.3249 7.78535 9.99949C7.78535 9.67409 7.91224 9.36152 8.13906 9.1282C8.36587 8.89488 8.67473 8.7592 9 8.74999ZM15 8.74999C15.1671 8.74527 15.3334 8.77409 15.4891 8.83476C15.6448 8.89542 15.7868 8.9867 15.9066 9.1032C16.0265 9.21969 16.1217 9.35904 16.1868 9.51298C16.2518 9.66693 16.2854 9.83237 16.2854 9.99949C16.2854 10.1666 16.2518 10.3321 16.1868 10.486C16.1217 10.64 16.0265 10.7793 15.9066 10.8958C15.7868 11.0123 15.6448 11.1036 15.4891 11.1642C15.3334 11.2249 15.1671 11.2537 15 11.249C14.6747 11.2398 14.3659 11.1041 14.1391 10.8708C13.9122 10.6375 13.7854 10.3249 13.7854 9.99949C13.7854 9.67409 13.9122 9.36152 14.1391 9.1282C14.3659 8.89488 14.6747 8.7592 15 8.74999Z" fill="#707991" />
                </svg>
                <input type="text" placeholder="Message" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12.815 12.197L5.28299 13.453C5.19639 13.4675 5.11513 13.5045 5.04737 13.5603C4.97961 13.6161 4.92775 13.6888 4.89699 13.771L2.29999 20.728C2.05199 21.368 2.72099 21.978 3.33499 21.671L21.335 12.671C21.4597 12.6088 21.5645 12.513 21.6378 12.3945C21.7111 12.276 21.7499 12.1394 21.7499 12C21.7499 11.8607 21.7111 11.7241 21.6378 11.6055C21.5645 11.487 21.4597 11.3913 21.335 11.329L3.33499 2.32901C2.72099 2.02201 2.05199 2.63301 2.29999 3.27201L4.89799 10.229C4.9286 10.3114 4.98041 10.3843 5.04818 10.4403C5.11594 10.4963 5.19728 10.5335 5.28399 10.548L12.816 11.803C12.8623 11.8111 12.9043 11.8353 12.9346 11.8714C12.9649 11.9074 12.9815 11.9529 12.9815 12C12.9815 12.0471 12.9649 12.0926 12.9346 12.1287C12.9043 12.1647 12.8623 12.1889 12.816 12.197H12.815Z" fill="#8BABD8" />
                </svg>
            </div>
        </div>
    );
}
function Chat() {
    return (
        <div className="ChatApp">
            <div className="LeftSideBar">
                <div className="SearchBar">
                    <img src="Menuicon.svg" alt="menu icon" className="MenuIcon" />
                    <div className="SearchBox">
                        <img src="Search.svg" alt="search icon" className="SearchIcon" />
                        <input type="text" placeholder="Search" className="SearchBoxInput" />
                    </div>
                </div>
                <div className="Scrollar-Chats">
                    {chats.map((item, index) => (<ChatComp item={item} id={index} />))}
                </div>
            </div>
            <div className="ContentOfChat">
                <TopBar />
                <Messages />
            </div>
        </div>
    );
}

export default Chat;