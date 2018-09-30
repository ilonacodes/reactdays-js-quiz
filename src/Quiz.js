import React from 'react';
import {connect} from 'react-redux';

const QuizComponent = ({questions}) => {
    return (
        <div>
            {questions.map((question, index) =>
                <div key={index}>{question.questionTitle}</div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export const Quiz = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizComponent);