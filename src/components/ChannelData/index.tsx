import React, { useRef, useEffect } from 'react';
import faker from 'faker';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputContainer, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author={faker.name.findName()}
            date="00/00/0000"
            content="some text"
          />
        ))}

        <ChannelMessage
          author={faker.name.findName()}
          date="00/00/0000"
          content={
            <>
              <Mention>@gagigante</Mention>, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputContainer>
        <InputWrapper>
          <Input type="text" placeholder="Conversarem #chat-livre" />
          <InputIcon />
        </InputWrapper>
      </InputContainer>
    </Container>
  );
};

export default ChannelData;