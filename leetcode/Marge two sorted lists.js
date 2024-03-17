/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */


var mergeTwoLists = function(list1, list2) {
  let result = null;

  while(list1 || list2) {
    if (list1?.val < list2?.val) {
      if (result === null) {
        result = new ListNode(list1.val);
      } else {
        result.next = new ListNode(list1.val);
      }

      list1 = list1.next;
    } else if (list1?.val > list2?.val) {
      if (result === null) {
        result = new ListNode(list2.val);
      } else {
        result.next = new ListNode(list2.val);
      }

      list2 = list2.next;
    } else {
      let value;
      if (list1?.val) {
        value = list1.val;
      } else if (list2?.val) {
        value = list2.val;
      }

      if (result === null) {
        result = new ListNode(list2.val);
      } else {
        result.next = new ListNode(list2.val);
      }
    }

    result = result.next;
  }

  return result;
};