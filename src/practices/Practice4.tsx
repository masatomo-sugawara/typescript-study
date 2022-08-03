export const Practice4 = () => {
  const getTotalFee = (num): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice4 = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：返却地のの型指定</p>
      <button onClick={onClickPractice4}>設定ファイルを触ってみる</button>
    </div>
  );
};
