alpha7 = s => {

r=0
for (i=0; i<s.length; i++)
    r=r*26+s.charCodeAt(i)-97
    console.log(r)


return r.toString(7)

}

console.log(alpha7("mmdasdfasd"))
