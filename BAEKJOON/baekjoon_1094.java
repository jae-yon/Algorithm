import java.util.Scanner;
// 막대기
public class baekjoon_1094 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    // 구해야하는 값
    int x = sc.nextInt();
    // 막대기
    int stick = 64;
    // 횟수
    int count = 0;
    do {
      if (stick > x) {
        stick /= 2;
      } else {
        x -= stick;
        count++;
      }
    } while (x > 0);
    System.out.println(count);
    sc.close();
  }  
}