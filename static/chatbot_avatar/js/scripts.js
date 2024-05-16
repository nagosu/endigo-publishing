document.addEventListener("DOMContentLoaded", function () {
  const chatbotBackground = document.querySelector(".chatbot-background");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatbotPreviewImage = document.querySelector(".chatbot-preview-image");
  const chatbotEnterButton = document.querySelector(".chatbot-enter-button");
  const chatbotCloseButton = document.querySelector(".chatbot-close-button");
  const chatbotChatbox = document.querySelector(".chatbot-chatbox");

  const chatbotInfo = document.querySelector(".chatbot-info");
  const chatbotInfoStartButton = document.querySelector(
    ".chatbot-info-start-button"
  );
  const chatbotChatInfoNewChatButton = document.querySelector(
    ".chatbot-chat-info-new-chat-button"
  );
  const chatbotChatInfoChatInputBox = document.querySelector(
    ".chatbot-chat-info-chat-input-box"
  );
  const chatbotChatInfoNewChatButtonIconPaths = document.querySelectorAll(
    ".chatbot-chat-info-new-chat-button-icon-path"
  );
  const chatbotChatInfoSendButton = document.querySelector(
    ".chatbot-chat-info-send-button"
  );
  const chatbotChatInfoVoiceButton = document.querySelector(
    ".chatbot-chat-info-voice-button"
  );
  const chatbotChatInfoVoiceButtonRect = document.querySelector(
    ".chatbot-chat-info-voice-button-rect"
  );
  const chatbotChatInfoVoiceButtonPaths = document.querySelectorAll(
    ".chatbot-chat-info-voice-button-path"
  );
  const chatbotVideo = document.querySelector(".chatbot-video");
  const chatbotInfoSuggestion1 = document.querySelector(
    ".chatbot-info-suggestion-1"
  );
  const chatbotInfoSuggestion2 = document.querySelector(
    ".chatbot-info-suggestion-2"
  );
  const chatbotMessagesWrapper = document.querySelector(
    ".chatbot-messages-wrapper"
  );
  const chatbotMessagesContainer = document.querySelector(
    ".chatbot-messages-container"
  );

  // 챗봇 최초진입 버튼 클릭 이벤트
  chatbotEnterButton.addEventListener("click", function () {
    // chatbotBackground
    chatbotBackground.style.width = "651px";
    chatbotBackground.style.height = "366px";
    chatbotBackground.style.borderRadius = "10px";

    // chatbotContainer
    chatbotContainer.style.width = "100%";
    chatbotContainer.style.height = "100%";
    chatbotContainer.style.borderRadius = "10px";

    // chatbotPreviewImage
    chatbotPreviewImage.style.display = "block";
    chatbotPreviewImage.style.width = "100%";

    // Chatbot Button
    chatbotEnterButton.style.display = "none";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "flex";

    // Chatbot Chat Box
    chatbotChatbox.style.display = "flex";
  });

  // 챗봇 시작 버튼 클릭 이벤트
  chatbotInfoStartButton.addEventListener("click", function () {
    // Chatbot Chat Box
    chatbotChatbox.style.height = "92.5px";

    // Chatbot Info
    chatbotInfo.style.height = "40.5px";
    chatbotInfo.style.justifyContent = "space-between";
    chatbotInfo.style.background = "none";
    chatbotInfo.style.backdropFilter = "none";
    chatbotInfo.style.border = "none";

    // Chatbot Info Start Button
    chatbotInfoStartButton.style.display = "none";

    // Chatbot Info Suggestion Button
    chatbotInfoSuggestion1.style.display = "inline-flex";
    chatbotInfoSuggestion2.style.display = "inline-flex";

    // Chatbot Chat Info New Chat Button
    chatbotChatInfoNewChatButton.removeAttribute("disabled");

    // Chatbot Chat Info New Chat Button Icon Paths
    chatbotChatInfoNewChatButtonIconPaths.forEach((path) => {
      path.setAttribute("stroke", "#000000");
    });

    // Chatbot Chat Info Chat Input Box
    chatbotChatInfoChatInputBox.removeAttribute("disabled");

    // Chatbot Chat Info Send Button
    chatbotChatInfoSendButton.removeAttribute("disabled");

    // Chatbot Chat Info Voice Button
    chatbotChatInfoVoiceButtonRect.setAttribute("fill", "#000000");
    chatbotChatInfoVoiceButtonPaths.forEach((path) => {
      path.setAttribute("stroke", "#000000");
    });
    chatbotChatInfoVoiceButton.removeAttribute("disabled");

    // Chatbot Preview Image
    chatbotPreviewImage.style.display = "none";

    // Chatbot Video
    chatbotVideo.style.display = "block";
  });

  // 챗봇 닫기 버튼 클릭 이벤트
  chatbotCloseButton.addEventListener("click", function () {
    // chatbotBackground
    chatbotBackground.style.width = "";
    chatbotBackground.style.height = "";
    chatbotBackground.style.borderRadius = "";

    // chatbotContainer
    chatbotContainer.style.width = "";
    chatbotContainer.style.height = "";
    chatbotContainer.style.borderRadius = "";

    // Chatbot Info
    chatbotInfo.style.height = "";
    chatbotInfo.style.justifyContent = "";
    chatbotInfo.style.background = "";
    chatbotInfo.style.backdropFilter = "";
    chatbotInfo.style.border = "";

    // chatbotPreviewImage
    chatbotPreviewImage.style.display = "";
    chatbotPreviewImage.style.width = "";

    // Chatbot Enter Button
    chatbotEnterButton.style.display = "";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "";

    // Chatbot Chat Box
    chatbotChatbox.style.display = "";
    chatbotChatbox.style.height = "";

    // Chatbot Close Button
    chatbotCloseButton.style.display = "";

    // Chatbot Video
    chatbotVideo.style.display = "";

    // Chatbot Info Start Button
    chatbotInfoStartButton.style.display = "";

    // Chatbot Info Suggestion Button
    chatbotInfoSuggestion1.style.display = "";
    chatbotInfoSuggestion2.style.display = "";

    // Chatbot Messages Container
    chatbotMessagesWrapper.style.display = "";
  });

  function sendMessage(text) {
    const MessageText = text || chatbotChatInfoChatInputBox.value.trim();
    if (MessageText !== "") {
      // 사용자 입력 값 가져오기
      const userInput = MessageText;

      // 새로운 메시지 요소 생성
      const newMessage1 = document.createElement("div");
      newMessage1.classList.add("chatbot-message");

      const newAvatar1 = document.createElement("img");
      newAvatar1.src = "../../static/chatbot_avatar/images/avatar-default.png";
      newAvatar1.alt = "";
      newAvatar1.classList.add("chatbot-message-avatar");

      const newMessageText1 = document.createElement("div");
      newMessageText1.classList.add("chatbot-message-text");
      newMessageText1.textContent = userInput;

      newMessage1.appendChild(newAvatar1);
      newMessage1.appendChild(newMessageText1);

      // 생성된 요소를 메시지 컨테이너에 추가
      chatbotMessagesContainer.appendChild(newMessage1);

      // 새로운 메시지 요소 생성
      const newMessage2 = document.createElement("div");
      newMessage2.classList.add("chatbot-message");

      const newAvatar2 = document.createElement("img");
      newAvatar2.src = "../../static/chatbot_avatar/images/avatar-server.png";
      newAvatar2.alt = "";
      newAvatar2.classList.add("chatbot-message-avatar");

      const newMessageText2 = document.createElement("div");
      newMessageText2.classList.add("chatbot-message-text");
      newMessageText2.textContent = "안녕하세요, 무엇을 도와드릴까요?";

      newMessage2.appendChild(newAvatar2);
      newMessage2.appendChild(newMessageText2);

      // 생성된 요소를 메시지 컨테이너에 추가
      chatbotMessagesContainer.appendChild(newMessage2);

      // 입력 창 비우기
      chatbotChatInfoChatInputBox.value = "";

      // 챗봇 메시지 컨테이너 표시
      chatbotMessagesWrapper.style.display = "flex";

      // 제안 버튼 숨기기
      chatbotInfoSuggestion1.style.display = "none";
      chatbotInfoSuggestion2.style.display = "none";

      // 스크롤을 맨 아래로 내리기
      chatbotMessagesWrapper.scrollTop = chatbotMessagesWrapper.scrollHeight;
    }
  }

  chatbotInfoSuggestion1.addEventListener("click", function () {
    chatbotInfoSuggestion1.style.display = "none";
    chatbotInfoSuggestion2.style.display = "none";
    sendMessage("Tell me about your use case");
  });

  chatbotInfoSuggestion2.addEventListener("click", function () {
    chatbotInfoSuggestion1.style.display = "none";
    chatbotInfoSuggestion2.style.display = "none";
    sendMessage("How can I use it for my business?");
  });

  // 입력 상자에서 엔터 키를 누르면 메시지 전송
  chatbotChatInfoChatInputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // 전송 버튼 클릭 시 메시지 전송
  chatbotChatInfoSendButton.addEventListener("click", function () {
    sendMessage();
  });
});
