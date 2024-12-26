import React, { useState, useEffect } from 'react';
import './index.css';

function AgeCalculator() {
  const [age, setAge] = useState(0);
  const [daysAlive, setDaysAlive] = useState(0);

  useEffect(() => {
    const birthDate = new Date('1988-12-26');
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);

    const timeDifference = today.getTime() - birthDate.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    setDaysAlive(days);
  }, []);

  return (
    <div className="bhirtday">
      <img src="/aile.jpeg" alt="aile" />
      {/* Yazılar */}
      <div className="bd-texts">
        <h1>🎉 İyi ki varsın Aşkım 🎂</h1>
        <p>Bugün itibariyle yaşın:</p>
        <h2>{age}</h2>
        <p>Bu dünyada toplam:</p>
        <h2>{daysAlive}. günün</h2>
        <p>sevgi dolu anılar biriktir!</p>
        <p>
          "Her yeni yaş, hayatın sunduğu bir başka güzel fırsat. Sevgiyle ve
          mutlulukla dolu nice yıllar dilerim!"
        </p>
      </div>
    </div>
  );
}

export default AgeCalculator;
