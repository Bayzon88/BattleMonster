export default function GameOver(): JSX.Element {
  return (
    <dialog className='nes-dialog' id='dialog-default'>
      <form method='dialog'>
        <p className='title'>Dialog</p>
        <p>Alert: this is a dialog.</p>
        <menu className='dialog-menu'>
          <button className='nes-btn'>Cancel</button>
          <button className='nes-btn is-primary'>Confirm</button>
        </menu>
      </form>
    </dialog>
  );
}
