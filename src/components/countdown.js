import PropTypes from 'prop-types';

import React, { Component } from 'react';

import { Typography } from '@mui/material';
import { Box, borderLeft, width } from '@mui/system';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: {
              xs: 5,
              md: 35,
            },
            marginRight: {
              xs: 5,
              md: 35,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Typography
              className="Countdown"
              sx={{
                fontSize: {
                  md: 133,
                  xs: 48,
                },
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'rgb(0, 240, 255)',
                paddingTop: 15,
                paddingBottom: 0,
                marginBottom: 0,
                marginRight: {
                  xs: 0.5,
                  md: 1,
                },
                marginLeft: {
                  xs: 0.5,
                  md: 1,
                },
              }}
            >
              <strong> {this.addLeadingZeros(countDown.days)} </strong>
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(0, 240, 255)',
                fontSize: {
                  md: 24,
                  xs: 11,
                },
                fontWeight: 50,
              }}
            >
              DAYS
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgb(0, 240, 255)',
              width: {
                md: '6px',
                xs: '2px',
              },
              height: {
                xs: 70,
                md: 180,
              },
              alignSelf: 'flex-end',
              marginLeft: {
                xs: 0,
                md: 2,
              },
              marginRight: {
                xs: 0,
                md: 2,
              },
              marginBottom: {
                xs: 0,
                md: 1,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Typography
              className="Countdown"
              sx={{
                fontSize: {
                  md: 133,
                  xs: 48,
                },
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'rgb(0, 240, 255)',
                paddingTop: 15,
                paddingBottom: 0,
                marginBottom: 0,
                marginRight: {
                  xs: 0.5,
                  md: 1,
                },
                marginLeft: {
                  xs: 0.5,
                  md: 1,
                },
              }}
            >
              <strong> {this.addLeadingZeros(countDown.hours)} </strong>
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(0, 240, 255)',
                fontSize: {
                  md: 24,
                  xs: 11,
                },
                fontWeight: 50,
              }}
            >
              HOURS
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgb(0, 240, 255)',
              width: {
                md: '6px',
                xs: '2px',
              },
              height: {
                xs: 70,
                md: 180,
              },
              alignSelf: 'flex-end',
              marginLeft: {
                xs: 0,
                md: 2,
              },
              marginRight: {
                xs: 0,
                md: 2,
              },
              marginBottom: {
                xs: 0,
                md: 1,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Typography
              className="Countdown"
              sx={{
                fontSize: {
                  md: 133,
                  xs: 48,
                },
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'rgb(0, 240, 255)',
                paddingTop: 15,
                paddingBottom: 0,
                marginBottom: 0,
                marginRight: {
                  xs: 0.5,
                  md: 1,
                },
                marginLeft: {
                  xs: 0.5,
                  md: 1,
                },
              }}
            >
              <strong> {this.addLeadingZeros(countDown.min)} </strong>
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(0, 240, 255)',
                fontSize: {
                  md: 24,
                  xs: 11,
                },
                fontWeight: 50,
              }}
            >
              MINUTES
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgb(0, 240, 255)',
              width: {
                md: '6px',
                xs: '2px',
              },
              height: {
                xs: 70,
                md: 180,
              },
              alignSelf: 'flex-end',
              marginLeft: {
                xs: 0,
                md: 2,
              },
              marginRight: {
                xs: 0,
                md: 2,
              },
              marginBottom: {
                xs: 0,
                md: 1,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Typography
              className="Countdown"
              sx={{
                fontSize: {
                  md: 133,
                  xs: 48,
                },
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'rgb(0, 240, 255)',
                paddingTop: 15,
                paddingBottom: 0,
                marginBottom: 0,
                marginRight: {
                  xs: 0.5,
                  md: 1,
                },
                marginLeft: {
                  xs: 0.5,
                  md: 1,
                },
              }}
            >
              <strong> {this.addLeadingZeros(countDown.sec)} </strong>
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(0, 240, 255)',
                fontSize: {
                  md: 24,
                  xs: 11,
                },
                fontWeight: 50,
              }}
            >
              SECONDS
            </Typography>
          </Box>
        </Box>

        {/* <Typography
          className="Countdown"
          variant="h1"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Montserrat',
            fontSize: 133,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'rgb(0, 240, 255)',
            paddingTop: 15,
          }}
        >
          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong> {this.addLeadingZeros(countDown.days)} </strong>
              <span style={{ fontSize: 114, fontWeight: 10 }}>
                |<br />{' '}
                <p
                  style={{
                    marginRight: 55,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 50,
                  }}
                >
                  DAYS
                </p>{' '}
              </span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong> {this.addLeadingZeros(countDown.hours)} </strong>
              <span style={{ fontSize: 114, fontWeight: 10 }}>
                |<br />{' '}
                <p
                  style={{
                    marginRight: 55,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 50,
                  }}
                >
                  HOURS
                </p>{' '}
              </span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong> {this.addLeadingZeros(countDown.min)} </strong>
              <span style={{ fontSize: 114, fontWeight: 10 }}>
                |<br />
                <p
                  style={{
                    marginRight: 55,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 50,
                  }}
                >
                  MINUTES
                </p>
              </span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong> {this.addLeadingZeros(countDown.sec)} </strong>
              <span style={{ fontSize: 114, fontWeight: 10 }}>
                <br />{' '}
                <p
                  style={{
                    marginRight: 1,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 50,
                  }}
                >
                  SECONDS
                </p>
              </span>
            </span>
          </span>
        </Typography>

        <Typography
          className="Countdown"
          variant="h3"
          sx={{
            flexWrap: 'wrap',
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'Montserrat',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'rgb(0, 240, 255)',
            paddingTop: 10,
          }}
        >
          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span style={{ fontSize: 45, fontWeight: 10 }}>
                |<br />{' '}
                <p
                  style={{
                    marginRight: 15,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 50,
                  }}
                >
                  DAYS
                </p>{' '}
              </span>{' '}
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>
              <span style={{ fontSize: 45, fontWeight: 10 }}>
                |<br />{' '}
                <p
                  style={{
                    marginRight: 15,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 50,
                  }}
                >
                  HOURS
                </p>{' '}
              </span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.min)}</strong>
              <span style={{ fontSize: 45, fontWeight: 10 }}>
                |<br />
                <p
                  style={{
                    marginRight: 15,
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 50,
                  }}
                >
                  MINUTES
                </p>
              </span>
            </span>
          </span>

          <span className="Countdown-col">
            <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.sec)}</strong>
              <span style={{ fontSize: 45, fontWeight: 10 }}>
                <br />{' '}
                <p
                  style={{
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 50,
                  }}
                >
                  SECONDS
                </p>
              </span>
            </span>
          </span>
        </Typography> */}
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
};

Countdown.defaultProps = {
  date: new Date(),
};

export default Countdown;
