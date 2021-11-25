import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Container } from 'reactstrap';

import NoMoodCard from '../../../shared/components/NoMoodCard';
import moodImg from '../../../shared/img/logo/moodCat.svg';
import catBg from '../../../shared/img/logo/catBg.svg';
import catImg from '../../../shared/img/logo/catImg.svg';
import noMoodImg from '../../../shared/img/logo/no-mood.svg';
import hapiIcon from '../../../shared/img/logo/hapiIcon.svg';
import neutralMoodIcon from '../../../shared/img/logo/seriousIcon.svg';
import sadIcon from '../../../shared/img/logo/sadIcon.svg';
import data from '../../../shared/data.json';

const HomeCard = () => {
  const [mood, setMood] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodEmoji, setMoodEmoji] = useState(null);

  const sortMoodEmojis = () => {
    let emoticon;
    if (mood === 'Cat was super excited') {
      emoticon = hapiIcon;
    } else if (mood === 'Cat was indifferent') {
      emoticon = neutralMoodIcon;
    } else if (mood === 'Cat was not having it') {
      emoticon = sadIcon;
    }

    setMoodEmoji(emoticon);
  };

  const handleSubmit = (e) => {
    sortMoodEmojis();
    e.preventDefault();
    setSelectedMood(mood);
    setMood(null)
  };

  return (
    <Container fluid='lg' className='main_container'>
      <Row xs='2' className='main_container-row'>
        <Col
          className='bg-light border'
          md={6}
          className='main_container-row-cols mood_select_area'
        >
          <div className='mood_select_area_inner'>
            <div className='mood_select_area_inner-qs'>
              <div className='mood_box_wrap flex_display-col'>
                <div className='mood_box_wrap_title-wrap'>
                  <div className='mood_box-img'>
                    <img
                      src={catImg}
                      alt='Cat Image'
                      width='80px'
                      height='80px'
                    />
                  </div>
                  <h5 className='mood_box_wrap_title-text'>
                    What is your cat’s current mood?
                  </h5>
                </div>
              </div>
              <div className='mood_select_area-selectors'>
                <form
                  className='mood_select_area-selectors-form'
                  onSubmit={handleSubmit}
                >
                  <div className='mood_select_area-inner'>
                    <div
                      className={
                        mood === 'Cat was not having it'
                          ? 'current-mood'
                          : 'mood_btn-wrapper'
                      }
                    >
                      <button
                        type='button'
                        className='mood_select_area-form-btns mood_select-btns'
                        onClick={() => setMood('Cat was not having it')}
                      >
                        <img
                          src={sadIcon}
                          alt='Cat Image'
                          width='20px'
                          height='20px'
                        />
                      </button>
                    </div>
                    <div
                      className={
                        mood === 'Cat was indifferent'
                          ? 'current-mood'
                          : 'mood_btn-wrapper'
                      }
                    >
                      <button
                        type='button'
                        className='mood_select_area-form-btns mood_select-btns'
                        onClick={() => setMood('Cat was indifferent')}
                      >
                        <img
                          src={neutralMoodIcon}
                          alt='Cat Image'
                          width='20px'
                          height='20px'
                        />
                      </button>
                    </div>
                    <div
                      className={
                        mood === 'Cat was super excited'
                          ? 'current-mood'
                          : 'mood_btn-wrapper'
                      }
                    >
                      <button
                        type='button'
                        className='mood_select_area-form-btns mood_select-btns'
                        onClick={() => setMood('Cat was super excited')}
                      >
                        <img
                          src={hapiIcon}
                          alt='Cat Image'
                          width='20px'
                          height='20px'
                        />
                      </button>
                    </div>
                  </div>

                  <div className='mood_result'>
                    <p className='mood_result-para'>{mood}</p>
                  </div>

                  <div className='toolbar_area'>
                    <button
                      disabled={mood === null}
                      className={
                        mood === null ? `toolbar_area-btn` : 'active-mood'
                      }
                      type='submit'
                    >
                      Save Mood
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
        <Col
          className='bg-light border'
          md={6}
          className='main_container-row-cols mood_display_area'
        >
          <div className='mood_display_area-inner flex_display-col'>
            <div className='no_mood_header'>
              <div className='no_mood_header-inner'>
                <span className='no_mood_header-text'>
                  <img
                    src={catImg}
                    width='40px'
                    height='40px'
                    alt='Cat image'
                  />
                </span>
                <span className='no_mood_header-text'>Cat mood tracker™</span>
              </div>
              <div>
                <h5 className='no_mood_header-subtext'>Mood History</h5>
              </div>
            </div>
            {selectedMood === null ? (
              <NoMoodCard
                image={noMoodImg}
                text={'No mood history to show yet'}
              />
            ) : (
              <div className='mood_card moods  flex_display-col'>
                {selectedMood === null ? (
                  ' '
                ) : (
                  <div className={`dummy_moods selected_mood`}>
                    <div className='mood_img-wrap mood_emo-wrap'>
                      <img
                        src={moodEmoji}
                        className=''
                        width='35px'
                        height='35px'
                        alt='Mood emojis'
                      />
                    </div>

                    <div className='mood_text-wrap'>
                      <p className='mood_text-para'>{selectedMood}</p>
                      {/* Could make the date dynamic if I wanted */}
                      <span className='mood_text-date'>06-09-2021 / 07:01</span>
                    </div>
                    <div className='mood_bg-area'>
                      <img src={catBg} className='catbg' alt='Mood image' />
                    </div>
                  </div>
                )}
                <div>
                  {data.mood.map((m) => (
                    <div className={`${m.className} dummy_moods`}>
                      <div className='mood_img-wrap'>
                        <img
                          src={m.img}
                          className=''
                          width='50px'
                          height='50px'
                          alt='Mood emojis'
                        />
                      </div>

                      <div className='mood_text-wrap'>
                        <p className='mood_text-para'>{m.text}</p>
                        <span className='mood_text-date'>{m.date}</span>
                      </div>
                      <div className='mood_bg-area'>
                        <img src={catBg} className='catbg' alt='Mood image' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCard;
