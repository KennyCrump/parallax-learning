import React, { Component } from 'react';
import logo from './logo.svg';
import { Parallax, Background } from 'react-parallax'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax
            blur={1}
            bgImage={require('./utah.jpg')}
            bgImageAlt="the cat"
            strength={700}
            renderLayer={percentage => (
              <div>
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '25%',
                        top: '50%',
                        borderRadius: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                        transform: "translate(-50%, -50%)"
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        borderRadius: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                        transform: "translate(-50%, -50%) skew(50, 100)"
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '75%',
                        top: '50%',
                        borderRadius: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                        transform: "translate(-50%, -50%)",
                    }}
                />

              </div>
          )}
        >
            <div style={{ height: '150vh' }} />
        </Parallax>
      </div>
    );
  }
}

export default App;
