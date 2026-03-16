import * as React from 'react';
import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlRaw,
  MjmlText,
} from 'mjml-react';

import * as Colors from '../../constants/colors';

import { Avatar } from '../../components/avatar';
import { FooterV2Section } from '../../components/footer-v2';
import { HeaderV2Section } from '../../components/header-v2';
import { TemplateBase } from '../../components/template-base';
import { BasicSection } from '../../components/sections/basic';

interface NFTMessageBoxProps {
  title?: string;
  content?: string;
  avatarSrc?: string;
  style?: React.CSSProperties;
}

const NFTMessageBox = (props: NFTMessageBoxProps) => (
  <MjmlRaw>
    <table
      style={{
        marginTop: 16,
        marginBottom: 16,

        fontSize: '1rem',
        fontFamily: 'Arial, sans-serif',

        backgroundColor: Colors.White,

        borderWidth: 1,
        borderColor: Colors.GreyEB,
        borderStyle: 'solid',
        borderCollapse: 'separate',
        borderRadius: 16,
        borderTopLeftRadius: 24,

        boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.04)',

        ...props.style,
      }}
    >
      {!!(props.avatarSrc || props.title) && (
        <tr>
          {!!props.avatarSrc && (
            <td style={{ paddingLeft: 24, width: 48 }}>
              <Avatar
                src={props.avatarSrc}
                size={40}
                style={{ marginTop: -16, marginLeft: -4 }}
              />
            </td>
          )}
          {!!props.title && (
            <td
              style={{
                paddingTop: props.avatarSrc ? 8 : 16,
                paddingRight: 16,
                paddingLeft: props.avatarSrc ? 8 : 24,
                fontWeight: 'bold',
                lineHeight: 1.5,
              }}
            >
              {props.title}
            </td>
          )}
        </tr>
      )}
      <tr>
        <td
          colSpan={2}
          style={{
            paddingTop: props.avatarSrc || props.title ? 4 : 16,
            paddingBottom: 16,
            paddingRight: 16,
            paddingLeft: 24,
            lineHeight: 1.5,
          }}
        >
          {props.content}
        </td>
      </tr>
    </table>
  </MjmlRaw>
);

export interface NFTContentWithMessageAndButtonSectionProps {
  content?: string;
  messageAvatarSrc?: string;
  messageTitle?: string;
  messageContent?: string;
  buttonText?: string;
  buttonHref?: string;
  append?: string;
}

export const NFTContentWithMessageAndButtonSection = (
  props: NFTContentWithMessageAndButtonSectionProps
) => {
  return (
    <BasicSection
      paddingLeft={40}
      paddingRight={40}
      paddingTop={16}
      paddingBottom={16}
    >
      <MjmlColumn>
        {!!props.content && (
          <MjmlText>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
          </MjmlText>
        )}

        {!!(props.messageTitle || props.messageContent) && (
          <NFTMessageBox
            avatarSrc={props.messageAvatarSrc}
            content={props.messageContent}
            title={props.messageTitle}
            style={{ marginTop: 32 }}
          />
        )}

        {!!props.buttonText && (
          <MjmlButton
            color={Colors.White}
            align="left"
            fontWeight={600}
            backgroundColor={Colors.Black13}
            paddingTop={32}
            paddingBottom={16}
            inner-padding="16px 64px"
            borderRadius={12}
            href={props.buttonHref}
            rel="noopener noreferrer"
          >
            {props.buttonText}
          </MjmlButton>
        )}

        {!!props.append && (
          <MjmlText paddingTop={24}>
            <div dangerouslySetInnerHTML={{ __html: props.append }} />
          </MjmlText>
        )}
      </MjmlColumn>
    </BasicSection>
  );
};

export interface NFTTwoContentWithMessageAndButtonTemplateProps {
  subject?: string;
  title1?: string;
  title2?: string;
  content1?: string;
  content2?: string;
  messageAvatarSrc1?: string;
  messageAvatarSrc2?: string;
  messageTitle1?: string;
  messageTitle2?: string;
  messageContent1?: string;
  messageContent2?: string;
  buttonText1?: string;
  buttonText2?: string;
  buttonHref1?: string;
  buttonHref2?: string;
  append1?: string;
  append2?: string;
  unsubscribeLink?: string;
}

export const NFTTwoContentWithMessageAndButtonTemplate = (
  props: NFTTwoContentWithMessageAndButtonTemplateProps
) => {
  const hasContent2 =
    !!props.content2 ||
    !!props.append2 ||
    !!props.messageTitle2 ||
    !!props.messageContent2 ||
    !!props.buttonText2;
  return (
    <TemplateBase subject={props.subject} linkColor={Colors.Black13}>
      <HeaderV2Section />

      <NFTContentWithMessageAndButtonSection
        content={props.content1}
        append={props.append1}
        messageAvatarSrc={props.messageAvatarSrc1}
        messageTitle={props.messageTitle1}
        messageContent={props.messageContent1}
        buttonHref={props.buttonHref1}
        buttonText={props.buttonText1}
      />

      {hasContent2 && (
        <React.Fragment>
          <BasicSection
            paddingLeft={40}
            paddingRight={40}
            paddingTop={24}
            paddingBottom={24}
          >
            <MjmlColumn>
              <MjmlDivider borderColor={Colors.Grey4A} borderWidth={1} />
            </MjmlColumn>
          </BasicSection>

          <NFTContentWithMessageAndButtonSection
            content={props.content2}
            append={props.append2}
            messageAvatarSrc={props.messageAvatarSrc2}
            messageTitle={props.messageTitle2}
            messageContent={props.messageContent2}
            buttonHref={props.buttonHref2}
            buttonText={props.buttonText2}
          />
        </React.Fragment>
      )}

      <FooterV2Section unsubscribeLink={props.unsubscribeLink} />
    </TemplateBase>
  );
};
