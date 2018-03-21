A nova branch foi criada, mas continuamos na branch anterior, neste caso, _master_. 

Altere um dos ficheiros no _master_ e faça commit. O objetivo é posteriormente alterar o mesmo ficheiro, mas na branch que foi criada (_bugFix_).
![img](../img/head_graph.png)
Resolvido o problema, eis o gráfico:
```bash
*   ed84ac1 marged branches
|\
| * b4b9d42 a conflict is comming
| | diff --git a/f1 b/f1
| | index e69de29..6415fdc 100644
| | --- a/f1
| | +++ b/f1
| | @@ -0,0 +1,2 @@
| | +Join IEEE!
| | +:)
* | 4f1592c Added first paragraph
|/
|   diff --git a/f1 b/f1
|   index e69de29..9550b9f 100644
|   --- a/f1
|   +++ b/f1
|   @@ -0,0 +1 @@
|   +Hello darkness, my old friend!
* c5b35e4 Init commit
  diff --git a/f1 b/f1
  new file mode 100644
  index 0000000..e69de29
  diff --git a/f2 b/f2
  new file mode 100644
  index 0000000..e69de29
```
