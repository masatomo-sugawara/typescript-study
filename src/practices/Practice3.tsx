export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice3 = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：返却地のの型指定</p>
      <button onClick={onClickPractice3}>練習問題３を実行</button>
    </div>
  );
};
