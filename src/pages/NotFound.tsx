function NotFound() {
  return (  
    <div className='container'>
      <div className='content not-found'>
        <span className='not-found__smile'>😕</span>
        <h1 className='content__title'>Ничего не найдено</h1>
        <span className='not-found__text'>К сожалению, запрашиваемая страница отсутствует в нашем интернет&#8209;магазине</span>
      </div>
    </div>
  );
}

export default NotFound;