import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';
import {css} from 'emotion';

const correct = css`
  color: green;
`;

const wrong = css`
  color: red;
`;

const QuizComponent = ({questions, nextQuestion, currentQuestion, correctAnswered, chooseAnswer}) => {

    const question = questions[currentQuestion];
    console.log(question);

    return (
        <div>
            <div>{question.questionTitle}</div>
            {question.options.map(option =>
                <div onClick={e => chooseAnswer(question.questionId, option)}
                     className={option.chosen ? (option.correct ? correct : wrong) : ''}
                >
                    {option.title}
                </div>
            )}
            <button onClick={(e) => nextQuestion(e)}>Next Question</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        correctAnswered: state.correctAnswered
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        chooseAnswer: (questionId, option) => dispatch(actions.chooseAnswer(questionId, option))
    }
};

export const Quiz = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizComponent);