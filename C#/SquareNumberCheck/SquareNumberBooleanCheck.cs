using System;

public class Kata
{ 
  public static bool IsSquare(int n)
  {
      //checks if number is negative
        if (n < 0)
            return false;

        int i = 0;
        while (i * i <= n)
        {
            if (i * i == n)
                return true;
            i++;
        }

        return false;
  }
}