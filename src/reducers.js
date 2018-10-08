import {data} from './data';
import {t} from './actions';

const initState = {
    questions: data,
    currentQuestion: 0,
};

export const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case t.NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            };

        case t.CHOOSE_ANSWER:
            return {
                ...state,
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