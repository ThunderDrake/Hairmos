import { validateForms } from '../functions/validate-forms';
const rules = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя слишком короткое, введите его ещё раз'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя слишком длинное, введите его ещё раз'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Как к вам обращаться?'
      }
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'По какому номеру с вами связаться?'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Форма не отправлена');
};

validateForms('.callback__form', rules, afterForm);
