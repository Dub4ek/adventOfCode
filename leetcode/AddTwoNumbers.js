
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let result = new ListNode();
  const head = result;
  let extra = 0;

  while(node1 || node2) {
    const val1 = node1 ? node1.val : 0;
    const val2 = node2 ? node2.val : 0;
    let sum =  (val1 + val2);

    if (sum > 9) {
      sum = sum - 10 + extra;
      extra = 1;
    } else if(extra > 0) {
      sum += extra;
      extra = 0;
    }

    result.val = sum;

    if (node1) {
      node1 = node1.next;
    }

    if (node2) {
      node2 = node2.next;
    }

    if (node1 || node2) {
      result.next = new ListNode();
      result = result.next;
    }
  }

  return head;
};

const list1_2 = new ListNode(9);
const list1_1 = new ListNode(9, list1_2);
const list1 = new ListNode(9, list1_1);

const list2_3 = new ListNode(9);
const list2_2 = new ListNode(9, list2_3);
const list2_1 = new ListNode(9, list2_2);
const list2 = new ListNode(9, list2_1);

console.log(addTwoNumbers(list1, list2))