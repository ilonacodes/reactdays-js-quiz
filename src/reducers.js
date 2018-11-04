import {data} from './data';
import {t} from './actions';

const initState = {
    questions: data,
    currentQuestion: 0,
    correctAnswered: 0
};

export const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case t.NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            };

        case t.CHOOSE_ANSWER:
            const correctChosen = state.questions[state.currentQuestion].options
                .filter(option => option.chosen).length > 0;

            const correctAnswer = state.questions[state.currentQuestion].options
                .find(option => option.optionId === action.option.optionId)
                .correct;

            if (correctChosen) {
                return state;
            }

            return {
                ...state,
                correctAnswered: correctAnswer ? state.correctAnswered + 1 : state.correctAnswered,
                questions: state.questions.map(question => {
                    if (question.questionId === action.questionId) {
                        return {
                            ...question,
                            options: question.options.map(option => {
                                if (option.optionId === action.option.optionId) {
                                    return {
                                        ...option,
                                        chosen: true
                                    }
                                }
                                else { return option }
                            })
                        }
                    } else { return question }
                })
            };

        default:
            return state;
    }
};