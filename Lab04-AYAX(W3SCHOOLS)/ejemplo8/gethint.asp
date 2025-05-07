<%
Response.ContentType = "text/plain"
Response.Charset = "UTF-8"

' Array de nombres de ejemplo
Dim a(30)
a(0) = "Ana"
a(1) = "Beatriz"
a(2) = "Carlos"
' ... agregar más nombres

q = LCase(Request.QueryString("q"))

hint = ""

' Buscar coincidencias
If q <> "" Then
    For i = 0 To UBound(a)
        If InStr(LCase(a(i)), q) > 0 Then
            If hint = "" Then
                hint = a(i)
            Else
                hint = hint & ", " & a(i)
            End If
        End If
    Next
End If

' Mostrar "no suggestion" si no hay coincidencias
If hint = "" Then
    Response.Write("No hay sugerencias")
Else
    Response.Write(hint)
End If
%>