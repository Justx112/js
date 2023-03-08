/* Что не так в нижеприведённом тесте функции pow ?

    it("Возводит x в степень n", function () {
        let x = 5;

        let result = x;
        assert.equal(pow(x, 1), result);

        result *= x;
        assert.equal(pow(x, 2), result);

        result *= x;
        assert.equal(pow(x, 3), result);
    }); 
    
Ответ: нету discribe, проверяет только возведение в степень 5 и
то, до 3 степени, нету it
*/

