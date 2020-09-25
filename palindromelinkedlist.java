//Java Solution

class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        ListNode reversedHead = reverse(slow);
        ListNode first = head;
        
        while (first != null && reversedHead != null) {
            if (first.val != reversedHead.val) {
                return false;
            }
            
            first = first.next;
            reversedHead = reversedHead.next;
        }
        
        return true;
    }
    
    public ListNode reverse(ListNode curr) {
        ListNode prev = null;
        
        while (curr != null) {
            ListNode temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev;
    }
}