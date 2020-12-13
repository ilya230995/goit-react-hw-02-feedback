import { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import SectionTitle from './components/SectionTitle/SectionTitle';
import NotificationMessage from './components/NotificationMessage/NotificationMessage';
import Container from './components/Container/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => {
      return a + b;
    });
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const allFeedbacks = this.countTotalFeedback();
    let positiveFeedbackPercentege = this.countPositiveFeedbackPercentage(
      allFeedbacks,
    );
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <SectionTitle title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />
        <SectionTitle title="Statistics" />
        {allFeedbacks === 0 ? (
          <NotificationMessage message="No feedback given" />
        ) : (
          <Statistics
            total={allFeedbacks}
            good={good}
            neutral={neutral}
            bad={bad}
            positiveFeedbackPercentege={positiveFeedbackPercentege}
          />
        )}
      </Container>
    );
  }
}

export default App;
