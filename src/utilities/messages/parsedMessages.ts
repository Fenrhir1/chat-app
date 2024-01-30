export function utilityParsedMessages(messages: Array<{ content: string; author: string }>) {
  const parsedMessages = messages
    .map(
      message => `
      <div class="my-message">
        <span class="message-author">${message.author}:</span>
        <p>${message.content}</p> 
      </div>`,
    )
    .join('');

  return parsedMessages;
}
