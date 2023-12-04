"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6153],{76153:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});let a=Object.freeze({name:"gnuplot",scopeName:"source.gnuplot",uuid:"A75AB1C2-611C-4500-9EE4-20668B5BB465",fileTypes:["gp","plt","plot","gnuplot"],patterns:[{name:"invalid.illegal.backslash.gnuplot",match:"(\\\\(?!\\n).*)"},{name:"punctuation.separator.statement.gnuplot",match:"(;)"},{include:"#LineComment"},{include:"#DataBlock"},{include:"#MacroExpansion"},{include:"#VariableDecl"},{include:"#ArrayDecl"},{include:"#FunctionDecl"},{include:"#ShellCommand"},{include:"#Command"}],repository:{DataBlock:{name:"meta.datablock.gnuplot",begin:"(?x:\n				([$][A-Za-z_]\\w*)\\s*             # 1: var name\n				(<<)\\s*                    # 2: shift operator\n				([A-Za-z_]\\w*)\\s*                # 3: end tag\n				(?=(\\#|$))                       # 4: comment or end of line\n			)",beginCaptures:{1:{patterns:[{include:"#SpecialVariable"}]},3:{name:"constant.language.datablock.gnuplot"}},end:"^(\\3)\\b(.*)",endCaptures:{1:{name:"constant.language.datablock.gnuplot"},2:{name:"invalid.illegal.datablock.gnuplot"}},patterns:[{include:"#LineComment"},{include:"#NumberLiteral"},{include:"#DoubleQuotedStringLiteral"}]},MacroExpansion:{begin:"([@][A-Za-z_]\\w*)",beginCaptures:{1:{patterns:[{include:"#SpecialVariable"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},VariableDecl:{name:"meta.variable.gnuplot",begin:"\\b(?x:\n				([A-Za-z_]\\w*)\\s*                # 1: var name\n				(?:\n					(\\[)\\s*                      # 2: opening bracket\n					(.*)\\s*                      # 3: expression\n					(\\])\\s*                      # 4: closing bracket\n				)?\n				(?=(=)(?!\\s*=))                  # 5: assignment\n			)",beginCaptures:{1:{name:"entity.name.variable.gnuplot",patterns:[{include:"#InvalidVariableDecl"},{include:"#BuiltinVariable"}]},3:{patterns:[{include:"#Expression"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},ArrayDecl:{name:"meta.variable.gnuplot",begin:"\\b(?x:\n				(array)\\s+                       # 1: array keyword\n				([A-Za-z_]\\w*)?                  # 2: var name\n				# Note: Handle size decl and init expression inside.\n				# TODO: Properly annotate brackets.\n			)",beginCaptures:{1:{name:"support.type.array.gnuplot"},2:{name:"entity.name.variable.gnuplot",patterns:[{include:"#InvalidVariableDecl"},{include:"#BuiltinVariable"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},FunctionDecl:{name:"meta.function.gnuplot",begin:"\\b(?x:\n				([A-Za-z_]\\w*)\\s*                # 1: func name\n				(                                # 2: parameter list\n					(\\()\\s*                      # 3: opening parens\n					([A-Za-z_]\\w*)\\s*            # 4: arg name\n					(?:\n						(,)\\s*                   # 5: comma\n						([A-Za-z_]\\w*)\\s*        # 6: other args\n					)*\n					(\\))                         # 7: closing parens\n				)\n			)",beginCaptures:{1:{name:"entity.name.function.gnuplot",patterns:[{include:"#BuiltinFunction"}]},2:{name:"meta.function.parameters.gnuplot"},3:{name:"punctuation.definition.parameters.begin.gnuplot"},4:{name:"variable.parameter.function.language.gnuplot"},5:{name:"punctuation.separator.parameters.gnuplot"},6:{name:"variable.parameter.function.language.gnuplot"},7:{name:"punctuation.definition.parameters.end.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},InvalidVariableDecl:{name:"invalid.illegal.variable.gnuplot",match:"\\b(GPVAL_\\w*|MOUSE_\\w*)\\b"},ShellCommand:{begin:"(!)",beginCaptures:{1:{name:"keyword.other.shell.gnuplot"}},end:"(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{name:"string.unquoted",match:"([^#]|\\\\(?=\\n))"}]},Command:{patterns:[{name:"invalid.deprecated.command.gnuplot",begin:"\\b(?x:\n						update\n					)\\b",end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))"},{begin:"\\b(?x:\n						break        |\n						clear        |\n						continue     |\n						pwd          |\n						refresh      |\n						replot       |\n						reread       |\n						shell\n					)\\b",beginCaptures:{0:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#InvalidWord"}]},{begin:"\\b(?x:\n						cd           |\n						call         |\n						eval         |\n						exit         |\n						help         |\n						history      |\n						load         |\n						lower        |\n						pause        |\n						print        |\n						printerr     |\n						quit         |\n						raise        |\n						save         |\n						stats        |\n						system       |\n						test         |\n						toggle\n					)\\b",beginCaptures:{0:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},{begin:"\\b(import)\\s(.+)\\s(from)",beginCaptures:{1:{name:"keyword.control.import.gnuplot"},2:{patterns:[{include:"#FunctionDecl"}]},3:{name:"keyword.control.import.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#SingleQuotedStringLiteral"},{include:"#DoubleQuotedStringLiteral"},{include:"#InvalidWord"}]},{begin:"\\b(reset)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{name:"support.class.reset.gnuplot",match:"\\b(bind|error(state)?|session)\\b"},{include:"#InvalidWord"}]},{begin:"\\b(undefine)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#BuiltinVariable"},{include:"#BuiltinFunction"},{name:"source.gnuplot",match:"(?<=\\s)([$]?[A-Za-z_]\\w*\\*?)(?=\\s)"},{include:"#InvalidWord"}]},{begin:"\\b(if|while)\\b",beginCaptures:{1:{name:"keyword.control.conditional.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},{begin:"\\b(else)\\b",beginCaptures:{1:{name:"keyword.control.conditional.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))"},{begin:"\\b(do)\\b",beginCaptures:{1:{name:"keyword.control.flow.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ForIterationExpr"}]},{begin:"\\b(set)(?=\\s+pm3d)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{name:"invalid.deprecated.options.gnuplot",match:"\\b(hidden3d|map|transparent|solid)\\b"},{include:"#SetUnsetOptions"},{include:"#ForIterationExpr"},{include:"#Expression"}]},{begin:"\\b((un)?set)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#SetUnsetOptions"},{include:"#ForIterationExpr"},{include:"#Expression"}]},{begin:"\\b(show)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ExtraShowOptions"},{include:"#SetUnsetOptions"},{include:"#Expression"}]},{begin:"\\b(fit|(s)?plot)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ColumnIndexLiteral"},{include:"#PlotModifiers"},{include:"#ForIterationExpr"},{include:"#Expression"}]}]},SetUnsetOptions:{patterns:[{name:"invalid.deprecated.options.gnuplot",match:"\\G\\s*\\b(?x:\n						clabel              |\n						data                |\n						function            |\n						historysize         |\n						macros              |\n						ticslevel           |\n						ticscale            |\n						(style\\s+increment\\s+\\w+)\n					)\\b"},{name:"support.class.options.gnuplot",match:"\\G\\s*\\b(?x:\n						angles              |\n						arrow               |\n						autoscale           |\n						border              |\n						boxwidth            |\n						clip                |\n						cntr(label|param)   |\n						color(box|sequence)?|\n						contour             |\n						(dash|line)type     |\n						datafile            |\n						decimal(sign)?      |\n						dgrid3d             |\n						dummy               |\n						encoding            |\n						(error)?bars        |\n						fit                 |\n						fontpath            |\n						format              |\n						grid                |\n						hidden3d            |\n						history             |\n						(iso)?samples       |\n						jitter              |\n						key                 |\n						label               |\n						link                |\n						loadpath            |\n						locale              |\n						logscale            |\n						mapping             |\n						[lrtb]margin        |\n						margins             |\n						micro               |\n						minus(sign)?        |\n						mono(chrome)?       |\n						mouse               |\n						multiplot           |\n						nonlinear           |\n						object              |\n						offsets             |\n						origin              |\n						output              |\n						parametric          |\n						(p|r)axis           |\n						pm3d                |\n						palette             |\n						pointintervalbox    |\n						pointsize           |\n						polar               |\n						print               |\n						psdir               |\n						size                |\n						style               |\n						surface             |\n						table               |\n						terminal            |\n						termoption          |\n						theta               |\n						tics                |\n						timestamp           |\n						timefmt             |\n						title               |\n						view                |\n						xyplane             |\n						zero                |\n						(no)?(m)?(x|x2|y|y2|z|cb|r|t)tics  |\n						(x|x2|y|y2|z|cb)data               |\n						(x|x2|y|y2|z|cb|r)label            |\n						(x|x2|y|y2|z|cb)dtics              |\n						(x|x2|y|y2|z|cb)mtics              |\n						(x|x2|y|y2|z|cb|[rtuv])range       |\n						(x|x2|y|y2|z)?zeroaxis\n					)\\b"}]},ExtraShowOptions:{name:"support.class.options.gnuplot",match:"\\b(?x:\n				all                         |\n				bind                        |\n				colornames                  |\n				functions                   |\n				plot                        |\n				variables                   |\n				version\n			)\\b"},PlotModifiers:{patterns:[{name:"invalid.deprecated.plot.gnuplot",match:"\\b(thru)\\b"},{name:"storage.type.plot.gnuplot",match:"\\b(?x:\n						in(dex)?            |\n						every               |\n						us(ing)?            |\n						wi(th)?             |\n						via\n					)\\b"},{name:"storage.type.plot.gnuplot",match:"\\b(newhist(ogram)?)\\b"}]},InvalidWord:{name:"invalid.illegal.gnuplot",match:"([^;#\\\\[:space:]]+)"},Expression:{patterns:[{include:"#Literal"},{include:"#SpecialVariable"},{include:"#BuiltinVariable"},{include:"#BuiltinOperator"},{include:"#TernaryExpr"},{include:"#FunctionCallExpr"},{include:"#SummationExpr"}]},ForIterationExpr:{begin:"\\b(?x:\n				(for)\\s*                    # 1: for keyword\n				(\\[)\\s*                     # 2: opening bracket\n				(?:                         #    optionally\n					([A-Za-z_]\\w*)\\s+       # 3: var name\n					(in)\\b                  # 4: in keyword\n				)?\n			)",beginCaptures:{1:{name:"keyword.control.flow.gnuplot"},2:{patterns:[{include:"#RangeSeparators"}]},3:{name:"variable.other.iterator.gnuplot"},4:{name:"keyword.control.flow.gnuplot"}},end:"((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{patterns:[{include:"#RangeSeparators"}]}},patterns:[{include:"#Expression"},{include:"#RangeSeparators"}]},SummationExpr:{begin:"\\b(sum)\\s*(\\[)",beginCaptures:{1:{name:"keyword.other.sum.gnuplot"},2:{patterns:[{include:"#RangeSeparators"}]}},end:"((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{patterns:[{include:"#RangeSeparators"}]}},patterns:[{include:"#Expression"},{include:"#RangeSeparators"}]},FunctionCallExpr:{name:"meta.function-call.gnuplot",begin:"\\b([A-Za-z_]\\w*)\\s*(\\()",beginCaptures:{1:{name:"variable.function.gnuplot",patterns:[{include:"#BuiltinFunction"}]},2:{name:"punctuation.definition.arguments.begin.gnuplot"}},end:"((\\))|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{name:"punctuation.definition.arguments.end.gnuplot"}},patterns:[{include:"#Expression"}]},TernaryExpr:{begin:"(?<!\\?)(\\?)(?!\\?)",beginCaptures:{1:{name:"keyword.operator.ternary.gnuplot"}},end:"((?<!:)(:)(?!:)|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{name:"keyword.operator.ternary.gnuplot"}},patterns:[{include:"#Expression"}]},RangeSeparators:{patterns:[{name:"punctuation.section.brackets.begin.gnuplot",match:"(\\[)"},{name:"punctuation.separator.range.gnuplot",match:"(:)"},{name:"punctuation.section.brackets.end.gnuplot",match:"(\\])"}]},BuiltinOperator:{patterns:[{name:"keyword.operator.logical.gnuplot",match:"(&&|\\|\\|)"},{name:"keyword.operator.bitwise.gnuplot",match:"(<<|>>|&|\\||\\^)"},{name:"keyword.operator.comparison.gnuplot",match:"(==|!=|<=|<|>=|>)"},{name:"keyword.operator.assignment.gnuplot",match:"(=)"},{name:"keyword.operator.arithmetic.gnuplot",match:"(\\+|-|~|!)"},{name:"keyword.operator.arithmetic.gnuplot",match:"(\\*\\*|\\+|-|\\*|/|%)"},{name:"keyword.operator.strings.gnuplot",match:"(\\.|\\b(eq|ne)\\b)",captures:{2:{name:"keyword.operator.word.gnuplot"}}}]},BuiltinVariable:{patterns:[{name:"invalid.deprecated.variable.gnuplot",match:"\\b(?x:\n						FIT_LIMIT           |\n						FIT_MAXITER         |\n						FIT_START_LAMBDA    |\n						FIT_LAMBDA_FACTOR   |\n						FIT_SKIP            |\n						FIT_INDEX\n					)\\b"},{name:"support.constant.gnuplot",match:"\\b(GPVAL_\\w*|MOUSE_\\w*)\\b"},{name:"support.variable.gnuplot",match:"\\b(ARG[0-9C]|GPFUN_\\w*|FIT_\\w*|STATS_\\w*|pi|NaN)\\b"}]},SpecialVariable:{patterns:[{match:"(?<=[\\[:=])\\s*(\\*)\\s*(?=[:\\]])",captures:{1:{name:"constant.language.wildcard.gnuplot"}}},{name:"constant.language.special.gnuplot",match:"(([@$])[A-Za-z_]\\w*)\\b",captures:{2:{name:"punctuation.definition.variable.gnuplot"}}}]},BuiltinFunction:{patterns:[{name:"invalid.deprecated.function.gnuplot",match:"\\b(?x:\n						defined\n					)\\b"},{name:"support.function.math.gnuplot",match:"\\b(?x:\n						abs            |\n						acos           |\n						acosh          |\n						airy           |\n						arg            |\n						asin           |\n						asinh          |\n						atan           |\n						atan2          |\n						atanh          |\n						EllipticK      |\n						EllipticE      |\n						EllipticPi     |\n						besj0          |\n						besj1          |\n						besy0          |\n						besy1          |\n						ceil           |\n						cos            |\n						cosh           |\n						erf            |\n						erfc           |\n						exp            |\n						expint         |\n						floor          |\n						gamma          |\n						ibeta          |\n						inverf         |\n						igamma         |\n						imag           |\n						invnorm        |\n						int            |\n						lambertw       |\n						lgamma         |\n						log            |\n						log10          |\n						norm           |\n						rand           |\n						real           |\n						sgn            |\n						sin            |\n						sinh           |\n						sqrt           |\n						tan            |\n						tanh           |\n						voigt          |\n						cerf           |\n						cdawson        |\n						faddeeva       |\n						erfi           |\n						VP\n					)\\b"},{name:"support.function.string.gnuplot",match:"\\b(?x:\n						gprintf        |\n						sprintf        |\n						strlen         |\n						strstrt        |\n						substr         |\n						strftime       |\n						strptime       |\n						system         |\n						word           |\n						words\n					)\\b"},{name:"support.function.other.gnuplot",match:"\\b(?x:\n						column         |\n						columnhead     |\n						exists         |\n						hsv2rgb        |\n						stringcolumn   |\n						timecolumn     |\n						tm_hour        |\n						tm_mday        |\n						tm_min         |\n						tm_mon         |\n						tm_sec         |\n						tm_wday        |\n						tm_yday        |\n						tm_year        |\n						time           |\n						valid          |\n						value\n					)\\b"}]},Literal:{patterns:[{include:"#NumberLiteral"},{include:"#DeprecatedScriptArgsLiteral"},{include:"#SingleQuotedStringLiteral"},{include:"#DoubleQuotedStringLiteral"},{include:"#InterpolatedStringLiteral"}]},NumberLiteral:{patterns:[{name:"constant.numeric.float.gnuplot",match:"(?x:\n						# .5e2 and 0.5e2\n						( ((\\b[0-9]+)|(?<!\\d)) )           # number or not a preceding digit\n						( [.][0-9]+ )                         # non-optional fractional\n						( [Ee][+-]?[0-9]+ )?                  # optional exponent\n					)(cm|in)?\\b"},{name:"constant.numeric.float.gnuplot",match:"(?x:\n						# 5e2 and 5.e2\n						( \\b[0-9]+ )                          # non-optional number\n						(\n							(     ( [Ee][+-]?[0-9]+\\b )  ) |  # non-optional exponent\n							( [.] ( [Ee][+-]?[0-9]+\\b )? )    # point and optional exponent\n						)\n					)(cm\\b|in\\b)?"},{name:"constant.numeric.hex.gnuplot",match:"\\b(0[Xx][0-9a-fA-F]+)(cm|in)?\\b"},{name:"constant.numeric.dec.gnuplot",match:"\\b(0+)(cm|in)?\\b"},{name:"constant.numeric.oct.gnuplot",match:"\\b(0[0-7]+)(cm|in)?\\b"},{name:"invalid.illegal.oct.gnuplot",match:"\\b(0[0-9]+)(cm|in)?\\b"},{name:"constant.numeric.dec.gnuplot",match:"\\b([0-9]+)(cm|in)?\\b"}]},ColumnIndexLiteral:{name:"support.constant.columnindex.gnuplot",match:"([$][0-9]+)\\b"},DeprecatedScriptArgsLiteral:{name:"invalid.illegal.scriptargs.gnuplot",match:"([$][0-9#])"},SingleQuotedStringLiteral:{name:"string.quoted.single.gnuplot",begin:"(')",beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:"((')(?!')|(?=(?<!\\\\)\\n$))",endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},patterns:[{include:"#RGBColorSpec"},{name:"constant.character.escape.gnuplot",match:"('')"}]},DoubleQuotedStringLiteral:{name:"string.quoted.double.gnuplot",begin:'(")',beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:'((")|(?=(?<!\\\\)\\n$))',endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},patterns:[{include:"#EscapedChar"},{include:"#RGBColorSpec"},{include:"#DeprecatedScriptArgsLiteral"},{include:"#InterpolatedStringLiteral"}]},InterpolatedStringLiteral:{name:"string.interpolated.gnuplot",begin:"(`)",beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:"((`)|(?=(?<!\\\\)\\n$))",endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},patterns:[{include:"#EscapedChar"}]},RGBColorSpec:{name:"constant.other.placeholder.gnuplot",match:"\\G(0x|#)(([0-9a-fA-F]{6})|([0-9a-fA-F]{8}))\\b"},EscapedChar:{name:"constant.character.escape.gnuplot",match:"(\\\\.)"},LineComment:{name:"comment.line.number-sign.gnuplot",begin:"(#)",beginCaptures:{1:{name:"punctuation.definition.comment.begin.gnuplot"}},end:"(?=(?<!\\\\)\\n$)",endCaptures:{0:{name:"punctuation.definition.comment.end.gnuplot"}}}},displayName:"Gnuplot"});var i=[a]}}]);