window.onload = function()
{
    (function()
    {
        //создаем доску
        for (let i = 0; i < 64; i++)
        {
            let z = document.createElement('div');

            document.getElementById('f2').appendChild(z).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : '#696969';

            //присваиваем id каждому div
            z.setAttribute('id', i);

            //создаем клик на каждый div
            z.addEventListener('click', function(e)
            {
                let el = e.target;

                el.style.backgroundColor = '#4169E0';

                //создаем переменные возможных ходов коня
                let a, b, c, d, r, f, g, h;

                if(el.getAttribute('id') > 9)
                {
                    a = document.getElementById(el.getAttribute('id') - 10);
                    a.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') > 16)
                {
                    b = document.getElementById(el.getAttribute('id') - 17);
                    b.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') > 14)
                {
                    c = document.getElementById(el.getAttribute('id') - 15);
                    c.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') > 5)
                {
                    d = document.getElementById(el.getAttribute('id') - 6);
                    d.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') < 54)
                {
                    r = document.getElementById(el.getAttribute('id') + 10);
                    r.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') < 47)
                {
                    f = document.getElementById(el.getAttribute('id') + 17);
                    f.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') < 49)
                {
                    g = document.getElementById(el.getAttribute('id') + 15);
                    g.style.backgroundColor = '#32CD32';
                }

                if(el.getAttribute('id') < 58)
                {
                    h = document.getElementById(el.getAttribute('id') + 6);
                    h.style.backgroundColor = '#32CD32';
                }

            })


        }

    })();
}