ffunction HCF = mini (x, y)
%This function searches for highest common factor
%It first checks if any of the numbers equal to zero, if so the non zero number is the HCF
%If the numbers are different, you minus the bigger number by the smaller one and this is done by recursion. 
  if x==0
    HCF = y;
  elseif y==0
    HCF == x;
  elseif (y == x)
    HCF = x;
  elseif (y>x)
    HCF = mini(y-x,x);
  else 
    HCF = mini(x-y,y);
  end

