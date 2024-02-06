import '../styles/components/_Greeting.scss';

export function Greeting() {

  const hours = new Date().getHours();
  let message = 'Boas vindas';

  if (hours >= 0 && hours < 5) {
    message = "Zzzzzz";
  }
  else if (hours >= 5 && hours < 13) {
    message = "Bom dia";
  }
  else if (hours >= 13 && hours <= 18) {
    message = "Boa tarde";
  }
  else {
    message = "Boa noite";
  }

  return (
    <div className="greetings__header">
      <h1 className="greetings__header__title" id="greetings">{message}</h1>
      <h2 className="greetings__header__subtitle">Navegar por todas as seções</h2>
    </div>
  );
}