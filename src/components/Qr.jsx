import qrCodeImage from '../images/image-qr-code.png';

export const Qr = () => {
  return (
    <>
      <main>
        <article className="card">
          <figure>
            <img src={qrCodeImage} alt="QR Code image" />
          </figure>
          <section className="card__content">
            <h1 className="card__title">
              Improve your front-end skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </section>
        </article>
      </main>
    </>
  );
};
