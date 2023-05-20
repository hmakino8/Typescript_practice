var SIZEEnum;
(function (SIZEEnum) {
    SIZEEnum[SIZEEnum["Small"] = 0] = "Small";
    SIZEEnum[SIZEEnum["Medium"] = 1] = "Medium";
    SIZEEnum[SIZEEnum["Large"] = 2] = "Large";
})(SIZEEnum || (SIZEEnum = {}));
console.log(SIZEEnum.Large);
console.log(SIZEEnum[0]);
console.log(SIZEEnum[5]);
//この場合jsファイルにトランスパイルすると即時関数が実行されるため、enumの使用はあまり推奨されない。
//# sourceMappingURL=enum.js.map
