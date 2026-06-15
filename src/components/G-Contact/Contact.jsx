import JumboSectionHeader from 'components/common/JumboSectionHeader';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { SendFormData } from 'components/G-Contact/axiosCreate';
import TextField from '@material-ui/core/TextField';
import { P, Bold } from 'components/common/typography';
import { boxShadow12, ImgCover } from 'styled.js';
import Button from 'components/common/Button';
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { SkyScraper } from 'img';

const Wrapper = styled.div`
  background-image: url(${SkyScraper});
  ${ImgCover}; // properties for parallax background
  width: 100%;
  padding: 1px;
  @media (max-width: 400px) {
    background-attachment: scroll;
  }
`;
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 100px auto;
  ${boxShadow12}
  padding:10px;
  width: 60%;
  @media (max-width: 400px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
`;
const InnerWrapper = styled.div`
  font-size: 16px;
  width: 540px;
  margin: auto;
  @media (max-width: 992px) {
    width: 90%;
  }
`;
const ContactInfo = styled.div``;

const ContactInfoRow = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: block;
    width: 100%;
  }
  margin: 0 auto 5px auto;
`;
const ContactInfoItem = styled.div`
  margin: 0 20px 0px 0px;
`;

const Form = styled.form`
  display: block;
  margin: auto;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  padding: 10px;
  width: 350px;
  @media (max-width: 992px) {
    width: 280px;
    gap: 10px;
  }
`;
const TextWrapper = styled.div`
  margin: 33px 0px 0px 10px !important;
  width: 90%;
`;
const TextAreaHeader = styled.div`
  color: rgba(0, 0, 0, 0.87) !important;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 16px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
`;
const StTextField = styled(TextField)`
  margin: 5px 10px !important;
  width: 250px;
  @media (max-width: 992px) {
    width: 90%;
  }
  > label {
    font-size: 16px;
  }
`;
const StTextareaAutosize = styled(TextareaAutosize)`
  display: block;
  height: 74px !important;
  width: 100%;
`;
export default function Contact() {
  let [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Website: '',
    Company: '',
    Message: '',
  });

  let refName = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    SendFormData.post('/', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleClear();
    focusOnName();
  }

  function handleClear() {
    setFormData({
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Website: '',
      Company: '',
      Message: '',
    });
  }

  function checkIsFormatting() {
    let filled = [];
    let empty = [];

    Object.keys(formData).map((item, index) => {
      if (formData[item] !== '') {
        filled.push(index);
      } else {
        empty.push(index);
      }
    });

    if (filled.length > 0) {
      return true;
    }
    if (empty.length === 7) {
      return false;
    }
  }

  function focusOnName() {
    if (!checkIsFormatting()) {
      refName.current.children[1].children[0].focus();
    }
  }

  function removeFocusName() {
    if (!checkIsFormatting()) {
      refName.current.children[1].children[0].blur();
    }
    return;
  }

  return (
    <Wrapper id='contact'>
      <WhiteBox onMouseEnter={focusOnName} onMouseLeave={removeFocusName}>
        <InnerWrapper>
          <JumboSectionHeader>Contact</JumboSectionHeader>
          <P>
            If you have any questions, please do not hesitate to email me or
            call me directly on my mobile. I am always happy to help.
          </P>
          <hr />
          <ContactInfo>
            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>Email:</Bold>{' '}
              </ContactInfoItem>{' '}
              <ContactInfoItem>p.f.siwek@gmail.com </ContactInfoItem>
            </ContactInfoRow>

            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>Mobile:</Bold>{' '}
              </ContactInfoItem>{' '}
              <ContactInfoItem>07463765514 </ContactInfoItem>
            </ContactInfoRow>

            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>LinkedIn:</Bold>
              </ContactInfoItem>
              <ContactInfoItem>
                <a
                  target='blank'
                  href='http://www.linkedin.com/in/pawel-siwek-78432119b'
                >
                  Profile
                </a>
              </ContactInfoItem>
            </ContactInfoRow>
          </ContactInfo>
          <Form noValidate autoComplete='on'>
            <StTextField
              type='text'
              value={formData.FirstName}
              name='FirstName'
              onChange={handleChange}
              required
              label='First Name'
              ref={refName}
            />
            <StTextField
              type='text'
              value={formData.LastName}
              name='LastName'
              label='Last Name'
              onChange={handleChange}
            />
            <StTextField
              type='email'
              value={formData.Email}
              name='Email'
              label='Email'
              required
              onChange={handleChange}
            />
            <StTextField
              type='number'
              value={formData.Phone}
              name='Phone'
              label='Phone'
              onChange={handleChange}
            />
            <StTextField
              type='text'
              value={formData.Website}
              name='Website'
              label='Website'
              onChange={handleChange}
            />
            <StTextField
              type='text'
              value={formData.Company}
              name='Company'
              label='Company'
              onChange={handleChange}
            />
            <TextWrapper>
              <TextAreaHeader>Message</TextAreaHeader>
              <StTextareaAutosize
                minRows={4}
                type='text'
                value={formData.Message}
                name='Message'
                aria-label='minimum height'
                placeholder=''
                variant='outlined'
                required
                onChange={handleChange}
              />
            </TextWrapper>
            <ButtonWrapper>
              <Button light onClick={handleSubmit} value='Send'>
                Send
              </Button>
              <Button light onClick={handleClear}>
                Clear
              </Button>
            </ButtonWrapper>
          </Form>
        </InnerWrapper>
      </WhiteBox>
    </Wrapper>
  );
}
