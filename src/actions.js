export const t = {
    NEXT_QUESTION: 'NEXT_QUESTION',
    CHOOSE_ANSWER: 'CHOOSE_ANSWER'
};

export const actions = {
    nextQuestion: () => ({
        type: t.NEXT_QUESTION
    }),

    chooseAnswer: (questionId, option) => ({
        type: t.CHOOSE_ANSWER,
        questionId,
        option
    })
};