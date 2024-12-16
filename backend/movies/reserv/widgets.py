from django import forms
from django.utils.safestring import mark_safe

class JSONEditorWidget(forms.Textarea):
    template_name = 'jsoneditor_widget.html'

    class Media:
        css = {
            'all': ('jsoneditor.min.css',)
        }
        js = ('jsoneditor.min.js',)

    def render(self, name, value, attrs=None, renderer=None):
        html = super().render(name, value, attrs, renderer)
        return mark_safe(f"""
            <div id="jsoneditor" style="width: 100%; height: 400px;"></div>
            {html}
            <script>
                document.addEventListener('DOMContentLoaded', function() {{
                    var container = document.getElementById("jsoneditor");
                    var options = {{
                        mode: 'code',
                        onChange: function() {{
                            var json = editor.getText();
                            document.getElementById("id_{name}").value = json;
                        }}
                    }};
                    var editor = new JSONEditor(container, options);
                    editor.setText(document.getElementById("id_{name}").value);
                }});
            </script>
        """)

