// src/Terminal.js
import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([
    { message: 'Welcome to my website', className: 'terminal-welcome' },
    { message: 'Type help to view available commands', className: 'terminal-welcome' }
  ]);

  const commands = {
    help: 'Available commands:<br /><span class="greenish">about</span>: Tells about me.<br /><span class="greenish">contact</span>: About my contact.<br /><span class="greenish">get-location</span>: Tells your current location.<br /><span class="greenish">clear</span>: Clears the console.',
    about: 'Hii, I am <span class="greenish">Anmolpreet Singh.</span><br />I am currently in my Final Year pursuing B.Tech in <span class="greenish">Electronics and Communication Engineering</span> from <span class="greenish">Punjab Engineering College</span>, Chandigarh.<br />I am passionate for <span class="greenish">Web Development</span> and <span class="greenish">Competitive Programming</span>. You can contact me for further queries.',
    contact: 'You can contact me at <span class="greenish">"anmolpreetkhiva@gmail.com"</span> or can text me at <span class="greenish">"+91-7814778503"</span>',
    clear: '',
    'get-location': 'Getting location...'
  };
  

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input.trim());
      setInput('');
    }
  };

  const processCommand = (command) => {
    const log = { message: `$ anmolpreetsingh >> ${command}`, className: 'terminal-command' };

    if (command === 'clear') {
      setLogs([
        { message: 'Welcome to my website', className: 'terminal-welcome' },
        { message: 'Type help to view available commands', className: 'terminal-welcome' }
      ]);
    } else if (command === 'get-location') {
      setLogs([...logs, log, { message: commands[command], className: 'terminal-general' }]);
      getLocation();
    } else if (commands[command]) {
      setLogs([...logs, log, { message: commands[command], className: 'terminal-general', isHTML: true }]);
    } else {
      setLogs([...logs, log, { message: `Unknown command: ${command}`, className: 'terminal-error' }]);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationMessage = `Your location: Latitude ${latitude}, Longitude ${longitude}`;
          setLogs((prevLogs) => [...prevLogs, { message: locationMessage, className: 'terminal-general' }]);
        },
        () => {
          setLogs((prevLogs) => [...prevLogs, { message: 'Sorry, you denied location access', className: 'terminal-error' }]);
        }
      );
    } else {
      setLogs((prevLogs) => [...prevLogs, { message: 'Geolocation is not supported by this browser', className: 'terminal-error' }]);
    }
  };

  const renderLog = (log, index) => {
    if (log.isHTML) {
      return <div key={index} className={`terminal-log-line ${log.className}`} dangerouslySetInnerHTML={{ __html: log.message }}></div>;
    }
    return log.message.split('\n').map((line, i) => (
      <div key={`${index}-${i}`} className={`terminal-log-line ${log.className}`}>{line}</div>
    ));
  };

  return (
    <div className="terminal-container" id="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>
      <div className="terminal-body">
        {logs.map((log, index) => (
          <div key={index} className="terminal-log">{renderLog(log, index)}</div>
        ))}
        <div className="terminal-input">
          <span>$ anmolpreetsingh &gt;&gt; </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
