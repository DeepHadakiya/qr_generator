import React, { useState } from "react";
import "./QrCode.css";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [selectedValue, setSelectedValue] = useState("url");
  const [phoneNum, setPhoneNum] = useState("");
  const [sms, setSms] = useState("");
  const [smsMessage, setSmsMessage] = useState('')
  const [txt, setTxt] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [pdf, setPdf] = useState('')

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    setUrl("");
    setPhoneNum("");
    setSms('')
    setSmsMessage('')
    setTxt('')
    setEmail('')
    setSubject('')
    setMessage('')
    setPdf('')
  };

  const qrCodeGenerate = () => {
    if (url) {
      return url
    } else if (phoneNum) {
      return phoneNum
    } else if (sms) {
      const smsData = `sms:${sms};body=${smsMessage}`;
      return smsData
    } else if (txt) {
      return txt
    } else if (email || subject || message) {
      const data = `mailto:<span class="math-inline">${email}?subject=${subject}&body=${message}`;
      return data
    } else if (pdf) {
      return pdf
    }
  }

  const dataTypes = url || phoneNum || sms || txt || email || subject || message || pdf
  return (
    <div>
      <div className="App" F>
        <div className="header">
          <h1>QR Code Generator</h1>
          <p>Scan and Connect: Generate Your QR Code Now!</p>
        </div>
        <div></div>
      </div>
      <div className="container">
        <div className="child-conatiner">
          <h4>Please choose your type</h4>
          <span className="qr-border">
            <label>URL</label>
            <input
              type="radio"
              id="url"
              checked={selectedValue === "url"}
              value="url"
              onChange={handleRadioChange}
            />
          </span>
          <span className="qr-border">
            <label>Phone</label>
            <input
              type="radio"
              checked={selectedValue === "phone"}
              value="phone"
              onChange={handleRadioChange}
            />
          </span>
          <span className="qr-border">
            <label>SMS</label>
            <input
              type="radio"
              checked={selectedValue === "sms"}
              value="sms"
              onChange={handleRadioChange}
            />
          </span>
          <span className="qr-border">
            <label>Plain Text</label>
            <input
              type="radio"
              checked={selectedValue === "txt"}
              value="txt"
              onChange={handleRadioChange}
            />
          </span>
          <span className="qr-border">
            <label>Email</label>
            <input
              type="radio"
              checked={selectedValue === "email"}
              value="email"
              onChange={handleRadioChange}
            />
          </span>
          <span className="qr-border">
            <label>PDF</label>
            <input
              type="radio"
              checked={selectedValue === "pdf"}
              value="pdf"
              onChange={handleRadioChange}
            />
          </span>
          <h5>Enter Your Value</h5>
          {selectedValue === "url" ? (
            <>
              <h5>Website URL</h5>
              <input
                className="form-control"
                type="url"
                name="selectedValue"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Your Url Here"
                autoComplete='off'
              />
            </>
          ) : (
            ""
          )}

          {selectedValue === "phone" ? (
            <>
              <h5>Phone Number</h5>
              <input
                className="form-control"
                type="tel"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                placeholder="Enter Your phone Number"
                autoComplete='off'
              />
            </>
          ) : (
            ""
          )}

          {selectedValue === "sms" ? (
            <>
              <h5>Your Phone Number</h5>
              <input
                className="form-control"
                type="tel"
                value={sms}
                onChange={(e) => setSms(e.target.value)}
                placeholder="Enter Your phone Number"
                autoComplete='off'
              />
              <h5>Enter Yor Message</h5>
              <textarea
                className="form-control"
                maxLength={1000}
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                placeholder="Add it here..."
                autoComplete='off'
              />
            </>
          ) : (
            ""
          )}
          {selectedValue === "txt" ? (
            <>
              <h5>Message</h5>
              <textarea
                className="form-control"
                maxLength={1000}
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
                placeholder="Enter Your Message"
                autoComplete='off'
              />
            </>
          ) : (
            ""
          )}
          {selectedValue === "email" ? (
            <span className="email">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                autoComplete='off'
              />
              <label>Subject</label>
              <input
                className="form-control"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                autoComplete='off'
              />
              <label>Message</label>
              <textarea
                className="form-control"
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                autoComplete='off'
              />
            </span>
          ) : (
            ""
          )}
          {selectedValue === "pdf" ? (
            <>
              <h5>Add File</h5>
              <input
                className="form-control"
                type="file"
                value={pdf}
                onChange={(e) => setPdf(e.target.value)}
                autoComplete='off'
              />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="child-conatiner1">
          {dataTypes ? (
            <QRCode
              style={{ height: '180px' }}
              value={qrCodeGenerate()} />
          ) : (
            <QRCode
              style={{ height: '180px' }}
              value={'Please Enter the Data then scan the QR Code to access data!'} />
          )}<br /><br />
          <h5>Scan the QR Code to access data!</h5>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
