// 최대값과 최소값
package PROGRAMMERS;

import java.util.Arrays;

public class programmers_02_01 {
  public static String solution(String s) {
    String[] arr = s.split(" ");
    int[] num = new int[arr.length];

    for (int i = 0; i < arr.length; i++) {
      num[i] = Integer.parseInt(arr[i]);
    }
    Arrays.sort(num);

    String answer = Integer.toString(num[0]) + " "  + Integer.toString(num[num.length-1]);
    return answer;
  }
  public static void main(String[] args) {
    System.out.println(solution("1 2 3 4")); // "1 4"
  }
}